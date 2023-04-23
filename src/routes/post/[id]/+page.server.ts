import { error } from "@sveltejs/kit";
import { Post } from "../../../resources/github";

export async function load({ params }) {
    try {
        const post = await Post.read(params.id);

        return post;
    } catch (err) {
        throw error(404, 'Post not found')
    }
}