<script>
	import PostListElement from "../components/PostListElement.svelte";

    export let data;
</script>

<ul>
    {#each data.posts as post}
        <PostListElement post={post} />
    {/each}
</ul>
