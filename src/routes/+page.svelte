<script lang="ts">
    import { onMount } from 'svelte';
    import BunHeadline from '../components/BunHeadline.svelte';

    const strings = ["includes both the RPG and CL",
    "targets RPG for .NET or C#", 
    "uses your IBM i database",
    "or migrates your IBM i database to SQL Server",
    "migrates 99% of your code automatically", 
    "migrates your enterprise RPG applications to .NET"];

    onMount(() => { 
        console.log('hello')
    });
</script>


<div class="m-4">
    <p class="text-lg"><a class="underline underline-offset-2 decoration=1" href="https://bun.sh/">Bun's home page</a> has an interesting feature that displays an array of strings one at a time, with a teletype-like effect. This Svelte app shows a way to replicate that special effect.</p>
    
    <div class="text-3xl mt-5">
        <div>ASNA Monarch is a .NET migration suite that</div>        
        <BunHeadline {strings}/>
    </div>
</div>