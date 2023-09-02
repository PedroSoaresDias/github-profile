import axios, { AxiosError } from "axios";

interface GitHubApiError{
    message: string;
    documentaion_url: string;
}

export async function getUserGitHub(username: string, timeout = 10000) {
    const source = axios.CancelToken.source();
    const id = setTimeout(() => source.cancel(), timeout);

    try {
        const user = await axios.get(`https://api.github.com/users/${username}`, {cancelToken: source.token});
        clearTimeout(id);
        console.log(user)
        return user.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            throw new Error("Erro ao carregar");
        } else {
            const githubError = error as AxiosError<GitHubApiError>;
            if (githubError && githubError.response) {
                throw new Error(githubError.response.data.message);
            }

            throw error;
        }
    }
}