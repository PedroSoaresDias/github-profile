export async function getUserGitHub(username: string) {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`, {cache: 'no-store'});

        if (!user.ok) throw new Error("Usuário não encontrado");

        return user.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getReposGitHub(username: string) {
    try {
        const repos = await fetch(`https://api.github.com/users/${username}/repos`, { cache: 'no-store' });

        if (!repos.ok) throw new Error("Nenhum repositório encontrado");

        return repos.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}