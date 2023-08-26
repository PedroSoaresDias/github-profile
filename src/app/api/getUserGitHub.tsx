import axios from "axios";

export async function getUserGitHub(username: string) {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    return user.data as User;
}

type User = {
    id: string;
    login: string;
    avatar_url: string;
    type: string;
    created_at: string;
    updated_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
};