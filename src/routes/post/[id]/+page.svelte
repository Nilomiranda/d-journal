<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
	import type { Post } from "../../../resources/github";
	import { Article } from "./page.css";

    export let data: Post;
</script>

<article class={Article}>
    <h1 class="post-title">{data.title}</h1>

    <SvelteMarkdown source={data.body} />
</article>