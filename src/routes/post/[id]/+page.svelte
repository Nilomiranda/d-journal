<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
	import type { Post } from "../../../resources/github";
	import { Article } from "./page.css";

    export let data: Post;
</script>

<svelte:head>
    <title>{data.title} | Danilo Journal</title>

    <meta property="og:title" content={data.title}>
    <meta property="og:description" content="A brief description of your page">
    <!-- <meta property="og:url" content="https://yourpage.com"> -->
    <meta property="og:type" content="website">
</svelte:head>

<article class={Article}>
    <h1 class="post-title">{data.title}</h1>

    <SvelteMarkdown source={data.body} />
</article>