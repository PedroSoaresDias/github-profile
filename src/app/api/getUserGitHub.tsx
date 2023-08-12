export async function getUserGitHub(username: String) {
    const user = await fetch(`https://api.github.com/users/${username}`);
    return user.json();
}