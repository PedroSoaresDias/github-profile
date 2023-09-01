import axios from "axios";

export async function getUserGitHub(username: string, timeout = 10000) {
    const source = axios.CancelToken.source();
    const id = setTimeout(() => source.cancel(), timeout);

    try {
        const user = await axios.get(`https://api.github.com/users/${username}`, {cancelToken: source.token});
        clearTimeout(id);
        return user.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            throw new Error("Erro ao carregar");
        } else {
            throw error;
        }
    }
}