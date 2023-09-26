import axios from "axios";

export async function getUserGitHub(username: string) {
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`);
    
        if (!user.status) {
            throw new Error("Erro ao buscar o usuário");
        }
    
        return await user.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}