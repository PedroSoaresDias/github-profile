import Image from "next/image";
import { getUserGitHub } from "@/app/api/getUserGitHub";

export default async function Usuario({username} : { username: string}) {

    const usernameData = await getUserGitHub(username);

    if (!usernameData) {
        <p>Usuario não encontrado</p>
    }

    const [developer] = await Promise.all([usernameData]);

    return (
        <section key={developer.id}>
            <Image src={developer.avatar_url} alt={developer.login} width={400} height={400} />
            <br />
            <h3>Nome de usuário: {developer.login}</h3>
            <br />
            <p>Tipo da conta: {developer.type ? developer.type : "Desconhecido"}</p>
            <p>Data de criação: {developer.created_at}</p>
            <p>Última atualização: {developer.updated_at}</p>
            <p>Sua descrição: {developer.bio}</p>
            <p>Repositórios públicos: {developer.public_repos}</p>
            <p>Seguidores: {developer.followers}</p>
            <p>Seguindo: {developer.following}</p>
        </section>
    );
}