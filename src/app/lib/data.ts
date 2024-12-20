const REPOS_BY_PAGE = 30;

const baseUrl = "https://api.github.com";

export const revalidate = 120;

function handleAPI(response: Response) {
  if (!response.ok) {
    throw new Error("A API atingiu o número limite de acessos");
  }
  
  return response.json();
}

export async function getUserGitHub(username: string) {
  try {
    const user = await fetch(`${baseUrl}/users/${username}`, { next: { revalidate: 120 } });

    return handleAPI(user);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getSearchUserGitHub(username: string) {
  try {
    const search = await fetch(`${baseUrl}/search/users?q=${username}`, { next: { revalidate: 120 } });

    return handleAPI(search);
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
    const repos = await fetch(`${baseUrl}/users/${username}/repos`, { next: { revalidate: 120 } });

    if (!repos.ok) {
      const errorResponse = await repos.json();
      const errorMessage = errorResponse.message || "Erro desconhecido na API do GitHub";
      throw new Error(errorMessage);
    }

    const { public_repos } = await getUserGitHub(username);
    const totalPages = calculateTotalPagesWithModulo(public_repos, REPOS_BY_PAGE);
    return totalPages;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRepositoriesByPage(username: string, currentPage: number) {
  const perPage = REPOS_BY_PAGE;
  const page = currentPage;
  
  try {
    const repos = await fetch(`${baseUrl}/users/${username}/repos?page=${page}&per_page=${perPage}`, { next: { revalidate: 120 } });

    return handleAPI(repos);
  } catch (error) {
    console.error(error);
    return null;
  }
}
