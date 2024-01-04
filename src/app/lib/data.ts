export async function getUserGitHub(username: string) {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`, { cache: 'no-store' });

        if (!user.ok) {
            const errorResponse = await user.json();
            const errorMessage = errorResponse.message || "Erro desconhecido da API do GitHub";
            throw new Error(errorMessage);
        }

        return user.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getRepositoriesGitHub(username: string) {
    try {
        const repositories = await fetch(`https://api.github.com/users/${username}/repos`, { cache: 'no-store' });

        if (!repositories.ok) {
            const errorResponse = await repositories.json();
            const errorMessage = errorResponse.message || "Erro desconhecido da API do GitHub";
            throw new Error(errorMessage);
        }

        return repositories.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getSearchUserGitHub(username: string) {
    try {
        const search = await fetch(`https://api.github.com/search/users?q=${username}`, { cache: 'no-store' });
        
        if (!search.ok) {
            const errorResponse = await search.json();
            const errorMessage = errorResponse.message || "Erro desconhecido na API do GitHub";
            throw new Error(errorMessage);
        }

        return search.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}