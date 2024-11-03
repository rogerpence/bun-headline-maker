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
        }, stringPause);
    }
    
    let scrollingText = '';

    const strings = ["includes both the RPG and CL",
    "targets RPG for .NET or C#", 
    "uses your IBM i database",
    "or migrates your IBM i database to SQL Server",
    "migrates 99% of your code automatically", 
    "migrates your enterprise RPG applications to .NET"];
    
    const MILLISECONDS_TO_PAUSE_BETWEEN_CHARACTERS = 15;
    const MILLISECONDS_TO_SHOW_FULL_TEXT = 4000;

    const characterPause = MILLISECONDS_TO_PAUSE_BETWEEN_CHARACTERS;
    const stringPause = MILLISECONDS_TO_SHOW_FULL_TEXT
    
    const bh = new BunHeader(setStringToShow, characterPause, stringPause);
    
    let cursorVisibility = 'visible';
   
    onMount(() => {
        setInitialText();
        makeCursorBlink();
        showTypingText();
    });    

</script>

<p><a href="https://bun.sh/">Bun's home page</a> has a great feature that replaces text with a teletype-like effect. This Svelte app shows a way to replicate that special effect.</p>

<div class="main">
    <div>ASNA Monarch is a .NET migration suite that</div>
    <div class="scrolling-text">{scrollingText}<span style="visibility:{cursorVisibility};">|</span></div>
</div>

<style>
    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        max-width: 800px;
    }
    div.main {
        font-size: 2rem;        
    }

</style>