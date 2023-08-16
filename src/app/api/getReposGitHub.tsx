import axios from 'axios';

export async function getReposGitHub(username: string) {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
    return repos.data;
}