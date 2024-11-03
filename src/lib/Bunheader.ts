export class BunHeader {
    private characterPause: number;
    private stringPause: number;

    public text: string = ''; 

    public fn: (char: string) => void

    constructor(fn: (char: string) => void, characterPause = 200, stringPause = 5000) {
        this.characterPause = characterPause;    
        this.fn = fn;
        this.stringPause = stringPause;
    }
   
    showStringBackward(): void {
        const processChar = (index: number) => {
            if (index >= -1) {
                setTimeout(() => {
                    this.fn(this.text.slice(0, index + 1));
                    processChar(index - 1);
                }, this.characterPause);
            }
        };

        processChar(this.text.length - 1);
    }

    showStringForward(): void {
        let buffer: string[] = [];

        const processChar = (index: number) => {
            if (index < this.text.length) {
                buffer.push(this.text[index]);
                setTimeout(() => {
                    this.fn(buffer.join(''));
                    processChar(index + 1);
                }, this.characterPause);
            }
        };

        processChar(0);
    }        

    showStringForwardThenBackward(): void {
        this.showStringForward();

        // Calculate the total duration of showStringForward
        const totalDuration = this.text.length * this.characterPause;
    
        // Call showStringBackward after the total duration of showStringForward plus the delay
        setTimeout(() => {
            this.showStringBackward();
        }, totalDuration + this.stringPause);    
    }

    processStrings(strings: string[]): void {
        const processNextString = (index: number) => {
            if (index < strings.length) {
                this.text = strings[index];
                this.showStringForwardThenBackward();

                // Calculate the total duration for the current string
                const totalDurationForward = this.text.length * this.characterPause;
                const totalDurationBackward = this.text.length * this.characterPause;
                const totalDuration = totalDurationForward + this.stringPause + totalDurationBackward + 500;

                // Schedule the next string to be processed after the current one is done
                setTimeout(() => {
                    processNextString(index + 1);
                }, totalDuration);
            }
            else {
                processNextString(0);
            }
        };

        processNextString(0);
    }  
}