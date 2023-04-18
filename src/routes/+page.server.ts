import { Post } from "../resources/github";

export async function load() {
    return {
        posts: await Post.list(),
    }
}