import type { AxiosResponse } from 'axios';
import axios from 'axios';

const githubHttpClient = axios.create({
    baseURL: 'https://api.github.com/repos/nilomiranda/d-journal/issues',
    headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
})

interface ListPostsParams {
    page?: number;
}

interface PostOwner {
    login: string;
    id: number;
}

interface PostLabel {
    id: number;
    name: string;
    
    /**
     * HEX CODE
     */
    color: string;
}

export interface Post {
    url: string;
    id: number;
    number: number;
    user: PostOwner;
    labels: PostLabel[];
    title: string;
    body: string;
    created_at: string;
}

export const Post = {
    async list({ page = 1 }: ListPostsParams = {}): Promise<Post[]> {
        try {
            const response = await githubHttpClient.get<any, AxiosResponse<Post[]>>('', {
                params: {
                    state: 'open',
                    creator: 'nilomiranda',
                    labels: 'blog-post',
                    direction: 'desc',
                    per_page: 10,
                    page,
                }
            });

            return response.data ?? [];
        } catch (err) {
            console.error('Error listing posts.', err);
            throw err;
        }
    },

    async read(): Promise<Post> {
        try {
            const response = await githubHttpClient.get<any, AxiosResponse<Post>>('');

            return response.data;
        } catch (err) {
            console.error('Error reading post.', err);
            throw err;
        }
    },
}