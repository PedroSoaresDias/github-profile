interface Dev {
  login: string;
}

interface Developer {
  id: string;
  login: string;
  html_url: string;
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

interface Developers {
  items: {
    login: string;
    id: number;
    avatar_url: string;
  }
}