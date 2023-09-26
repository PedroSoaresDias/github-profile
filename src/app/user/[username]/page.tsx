import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { getUserGitHub } from "@/app/api/getUserGitHub";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const username = context.params?.username as string;
    const developer = await getUserGitHub(username);

    if (!developer) {
        return {
            notFound: true,
        }
    }

    return {
        props: {developer},
    }
}

interface Developer{
    id: number,
    login: string,
    avatar_url: string,
    type: string,
    created_at: string,
    updated_at: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
}

export default function Usuario({ developer }: { developer: Developer }) {

    const createdAt = new Date(developer.created_at).toLocaleDateString();
    const updadedAt = new Date(developer.updated_at).toLocaleDateString();

    return (
        <section key={developer.id}>
            <Image src={developer.avatar_url} alt={developer.login} width={400} height={400} />
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