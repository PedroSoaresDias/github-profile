import axios from "axios";

export async function getUserGitHub(username: string) {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    return user.data;
}