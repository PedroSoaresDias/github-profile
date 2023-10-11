import { getUserGitHub } from "@/app/api/getUserGitHub";
import Image from "next/image";
import Link from "next/link";

export default async function Usuario({ params: { username }, }: { params: { username: string } }) {

    try {
        const developer = await getUserGitHub(username);

        if(!developer) return <p>Usuário não encontrado</p>

        const createdAt = new Date(developer.created_at).toLocaleDateString();
        const updadedAt = new Date(developer.updated_at).toLocaleDateString();

        return (
            <section key={developer.id}>
                <Link href={"/"} className="my-10 ml-5 font-semibold text-lg">Voltar para a página principal</Link>
                <br />
                <Image src={developer.avatar_url} alt={developer.login} width={350} height={350} />
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
    } catch (error) {
        console.log(error);
        return <p>Ocorreu um erro ao buscar o usuário</p>
    }

}