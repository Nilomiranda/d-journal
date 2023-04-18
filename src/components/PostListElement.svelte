<script lang="ts">
    import {format} from "date-fns"
	import type { Post } from "../resources/github";
    import { Card } from "./PostListElement.css";

    export let post: Post;
</script>

<div class={Card}>
    <small>{format(new Date(post.created_at), 'LLLL do, yyyy')}</small>
    <h1>{post.title}</h1>
</div>