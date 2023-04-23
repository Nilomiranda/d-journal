import { error } from "@sveltejs/kit";
import { Post } from "../../../resources/github";

export async function load({ params }) {
    try {
        const post = await Post.read(params.id);

        const labels = post.labels.map(postLabel => postLabel.name);
        const { state } = post;

        if (!labels.includes('blog-post') || state !== 'open') {
            throw new Error('Must be a blog post');
        }

        return post;
    } catch (err) {
        throw error(404, 'Post not found')
    }
}