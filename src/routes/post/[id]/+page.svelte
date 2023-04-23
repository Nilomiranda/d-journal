<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
	import type { Post } from "../../../resources/github";
	import { Article } from "./page.css";

    export let data: Post;

    export const getDescription = () => {
        const { body, title } = data;

        const [, description] = /\[description:(.+?):description\]/gmi.exec(body) as Array<string>;

        return description ?? `Danilo's thoughts about ${title}`; 
    }
</script>

<svelte:head>
    <title>{data.title} | Danilo Journal</title>

    <meta property="og:title" content={data.title}>
    <meta property="og:image" content="/src/favicon.png">
    <meta property="og:description" content={getDescription()}>
    <meta property="og:type" content="website">
</svelte:head>

<article class={Article}>
    <h1 class="post-title">{data.title}</h1>

    <SvelteMarkdown source={data.body} />
</article>