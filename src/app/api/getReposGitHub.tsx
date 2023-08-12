export async function getReposGitHub(username: String) {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
    return repos.json();
}