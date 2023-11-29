interface Dev {
    login: string;
}

interface Developer {
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
}

interface Repos {
    id: string;
    name: string;
    html_url: string;
}