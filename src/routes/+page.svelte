<script>
	import PostListElement from "../components/PostListElement.svelte";
	import { Main } from "./page.css";

    export let data;
</script>

<main class={Main}>
    <h1>Danilo Journal</h1>
    <ul>
        {#each data.posts as post}
            <PostListElement post={post} />
        {/each}
    </ul>
</main>
