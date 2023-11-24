export async function getReposGitHub(username: string) {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
    return repos.json();
}