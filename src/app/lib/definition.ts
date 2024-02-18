type Dev = {
  login: string;
}

type Developer = {
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

type Repos = {
  id: string;
  name: string;
  html_url: string;
}

type Developers = {
  login: string;
  id: number;
  avatar_url: string;
}

type TotalCount = {
  total_count: number;
}