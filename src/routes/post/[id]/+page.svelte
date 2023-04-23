<script lang="ts">
	import type { Post } from "../../../resources/github";

    export let data: Post;
</script>

<h1>{data.title}</h1>

<p>{data.body}</p>