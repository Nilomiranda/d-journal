<script lang="ts">
    import { page } from '$app/stores';
    import SvelteMarkdown from "svelte-markdown";
	import type { Post } from "../../../resources/github";
	import { Article } from "./page.css";

    export let data: Post;
    export const descriptionRegex = /\[description:(.+?):description\]/gmi;

    export const getDescription = () => {
        const { body, title } = data;

        const [, description] = descriptionRegex.exec(body) as Array<string>;

        return description ?? `Danilo's thoughts about ${title}`; 
    }
</script>

<svelte:head>
    <title>{data.title} | Danilo Journal</title>

    <meta property="og:title" content={data.title}>
    <meta property="og:image" content={`${$page.url.origin}/favicon.png`}>
    <meta property="og:description" content={getDescription()}>
    <meta property="og:type" content="website">
</svelte:head>

<article class={Article}>
    <h1 class="post-title">{data.title}</h1>

    <SvelteMarkdown source={data.body.replace(descriptionRegex, '')} />
</article>