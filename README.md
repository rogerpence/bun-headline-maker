# News ticker-like text display

[Bun's home page ](https://bun.sh/) has an interesting feature that displays an array of strings one at a time, with a teletype-like effect. This Svelte app shows a way to replicate that special effect.

![](https://nyc3.digitaloceanspaces.com/asna-assets/images/ezgif.com-optimize.gif)

(The GIF is a little choppy, the actual display is very smooth.)

This Svelte 5 project provides BunHeadline.svelte component that encapsulates displaying the teletype text. 


```js
<script lang="ts">
    import BunHeadline from '../components/BunHeadline.svelte';

    const strings = ["includes both the RPG and CL",
    "targets RPG for .NET or C#", 
    "uses your IBM i database",
    "or migrates your IBM i database to SQL Server",
    "migrates 99% of your code automatically", 
    "migrates your enterprise RPG applications to .NET"];
</script>

<div class="m-4">
    <p class="text-lg"><a class="underline underline-offset-2 decoration=1" href="https://bun.sh/">Bun's home 
    page</a> has an interesting feature that displays an array of strings one at a time, with a 
    ticker-tape effect. This Svelte app shows a way to replicate that special effect.</p>
    
    <div class="text-3xl mt-5">
        <div>ASNA Monarch is a .NET migration suite that</div>        
        <BunHeadline {strings}/>
    </div>
</div>
```

Although this is a Svelte 5 project it currently uses Svelte 4 syntax (because this was written for a Svelte 4 project).

The `BunHeader.ts` file has a TypeScript class that does all the heavy lifting for the text display. 