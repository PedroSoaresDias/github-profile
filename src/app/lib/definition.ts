type Dev = {
    login: string;
}

type Developer = {
    id: number;
    login: string;
    avatar_url: string;
    type: string;
    created_at: string;
    updated_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

type Repos = {
    id: number;
    name: string;
    html_url: string;
}