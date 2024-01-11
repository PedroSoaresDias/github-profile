const USERS_BY_PAGE = 30;
const REPOS_BY_PAGE = 30;
  
export async function getUserGitHub(username: string) {
  try {
    const user = await fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 10 } });

    if (!user.ok) {
      const errorResponse = await user.json();
      const errorMessage = errorResponse.message || "Erro desconhecido na API do GitHub";
      throw new Error(errorMessage);
    }

    return user.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getSearchUsersByPage(username: string, currentPage: number) {
  const perPage = USERS_BY_PAGE;
  const page = currentPage;

  try {
    const search = await fetch(`https://api.github.com/search/users?q=${username}&page=${page}&per_page=${perPage}`, { cache: 'no-store' });

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

export async function getRepositoriesByPage(username: string, currentPage: number) {
  const perPage = REPOS_BY_PAGE;
  const page = currentPage;
  
  try {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`, { next: { revalidate: 10 } });

    if (!repos.ok) {
      const errorResponse = await repos.json();
      const errorMessage = errorResponse.message || "Erro desconhecido na API do GitHub";
      throw new Error(errorMessage);
    }
    
    return repos.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

function calculateTotalPagesWithModulo(totalItems: number, itemsByPage: number): number {
  return totalItems % itemsByPage === 0 ? totalItems / itemsByPage : Math.floor(totalItems / itemsByPage) + 1;
}

export async function getRepositoriesGitHub(username: string) {
  try {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`, { next: { revalidate: 10 } });

    if (!repos.ok) {
      const errorResponse = await repos.json();
      const errorMessage = errorResponse.message || "Erro desconhecido na API do GitHub";
      throw new Error(errorMessage);
    }

    const totalItems = await repos.json();
    const totalPages = calculateTotalPagesWithModulo(totalItems, REPOS_BY_PAGE);
    return totalPages;
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

    const { total_count, items } = await search.json();
    const totalPages = Math.ceil(total_count / USERS_BY_PAGE);
    return {total_count, items, totalPages}
  } catch (error) {
    console.error(error);
    return null;
  }
}