import axios from 'axios';

export async function getReposGitHub(username: String) {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
    const data = repos.data;
    return data;
}