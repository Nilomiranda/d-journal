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

interface ListGithubIssuesParams {
    page?: number;
}

interface GithubUser {
    login: string;
    id: number;
}

interface GithubLabel {
    id: number;
    name: string;
    
    /**
     * HEX CODE
     */
    color: string;
}

interface GithubIssue {
    url: string;
    id: number;
    number: number;
    user: GithubUser;
    labels: GithubLabel[];
    title: string;
    body: string;
}

export const Post = {
    async list({ page = 1 }: ListGithubIssuesParams = {}): Promise<GithubIssue[]> {
        try {
            const response = await githubHttpClient.get<any, AxiosResponse<GithubIssue[]>>('', {
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

    async read(): Promise<GithubIssue> {
        try {
            const response = await githubHttpClient.get<any, AxiosResponse<GithubIssue>>('');

            return response.data;
        } catch (err) {
            console.error('Error reading post.', err);
            throw err;
        }
    },
}