import Image from "next/image";
import { getUserGitHub } from "@/app/api/getUserGitHub";

export default async function Usuario(username: string) {

    const developer = await getUserGitHub(username);

    const createdAt = new Date(developer.created_at).toLocaleDateString();
    const updadedAt = new Date(developer.updated_at).toLocaleDateString();

    return (
        <section key={developer.id}>
            <Image src={developer.avatar_url} alt={developer.login} width={500} height={500} />
            <br />
            <h3>Nome de usuário: {developer.login}</h3>
            <br />
            <p>Tipo da conta: {developer.type ? developer.type : "Desconhecido"}</p>
            <p>Data de criação: {createdAt}</p>
            <p>Última atualização: {updadedAt}</p>
            <p>Sua descrição: {developer.bio ? developer.bio : "Não Informado"}</p>
            <p>Repositórios públicos: {developer.public_repos}</p>
            <p>Seguidores: {developer.followers}</p>
            <p>Seguindo: {developer.following}</p>
        </section>
    );
}