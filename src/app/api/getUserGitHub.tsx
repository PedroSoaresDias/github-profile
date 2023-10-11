export async function getUserGitHub(username: string) {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`);

        if (!user.ok) throw new Error("Usuário não encontrado");

        return user.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}