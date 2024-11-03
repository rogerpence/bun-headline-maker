<script lang="ts">
    import { onMount } from 'svelte';
    
    import {BunHeader} from '../lib/BunHeader.ts';
    
    function setStringToShow(str: string): void {
        scrollingText = str;
    }
    
    function setInitialText() {
        scrollingText = strings[strings.length - 1];        
    }
    
    function makeCursorBlink() {
        setInterval(() => {
            cursorVisibility = (cursorVisibility === 'visible') ? 'hidden' : 'visible';            
        }, 500);
    }
    
    function showTypingText() {
        setTimeout(() => {
            bh.processStrings(strings);        
        }, DELAY_BEFORE_EFFECT_START);
    }
    
    export let strings: string[] = [];

    let scrollingText = '';
   
    const MILLISECONDS_TO_PAUSE_BETWEEN_CHARACTERS = 15;
    const MILLISECONDS_TO_SHOW_FULL_TEXT = 4000;
    const DELAY_BEFORE_EFFECT_START = 5000;

    const bh = new BunHeader(setStringToShow, MILLISECONDS_TO_PAUSE_BETWEEN_CHARACTERS, MILLISECONDS_TO_SHOW_FULL_TEXT);
    
    let cursorVisibility = 'visible';
   
    onMount(() => {
        setInitialText();
        makeCursorBlink();
        showTypingText();
    });    

</script>

<div class="scrolling-text">{scrollingText}<span style="visibility:{cursorVisibility};">|</span></div>

