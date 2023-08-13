import axios from "axios";

export async function getUserGitHub(username: string) {
    if (!username) {
        return
    }
    const user = await axios.get(`https://api.github.com/users/${username}`);
    return user.data;
}