<script>
	import { page } from "$app/stores";
	import PostListElement from "../components/PostListElement.svelte";
	import { Main } from "./page.css";

    export let data;
</script>

<svelte:head>
    <title>Danilo Journal</title>

    <meta property="og:title" content="Danilo Journal">
    <meta property="og:image" content={`${$page.url.origin}/favicon.png`}>
    <meta property="og:description" content="Danilo is sharing his thoughts">
    <meta property="og:type" content="website">
</svelte:head>

<main class={Main}>
    <h1>Danilo Journal</h1>
    {#if !data.posts?.length}
        <strong>There's nothing here.</strong>
    {/if}
    <ul>
        {#each data.posts as post}
            <PostListElement post={post} />
        {/each}
    </ul>
</main>
