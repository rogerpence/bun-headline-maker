<script lang="ts">
    import { onMount } from 'svelte';
    import BunHeadline from '../components/BunHeadline.svelte';

    onMount(() => { 
        console.log('hello')
    });
</script>

<BunHeadline />