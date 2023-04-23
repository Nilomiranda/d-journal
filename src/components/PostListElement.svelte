<script lang="ts">
    import {format} from "date-fns"
	import type { Post } from "../resources/github";
    import { Card } from "./PostListElement.css";

    export let post: Post;
</script>

<a class={Card} href={`/post/${post.number}`}>
    <small>{format(new Date(post.created_at), 'LLLL do, yyyy')}</small>
    <h1>{post.title}</h1>
</a>