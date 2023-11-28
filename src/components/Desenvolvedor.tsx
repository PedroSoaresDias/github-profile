import Image from "next/image";
import { getUserGitHub } from "@/app/lib/data";

export default async function Desenvolvedor(username: string) {
    
    const developer: Developer = await getUserGitHub(username)

    if (!developer) return <div className="flex justify-center items-center text-4xl">Erro ao carregar</div>

    return (
        <section key={developer.id}>
            <Image src={developer.avatar_url} alt={developer.login} width={300} height={300} />
            <br />
            <h3>Nome de usuário: {developer.login}</h3>
            <br />
            <p>Tipo da conta: {developer.type}</p>
            <p>Data de criação: {developer.created_at}</p>
            <p>Última atualização: {developer.updated_at}</p>
            <p>Sua descrição: {developer.bio ? developer.bio : "Não Informado"}</p>
            <p>Repositórios públicos: {developer.public_repos}</p>
            <p>Seguidores: {developer.followers}</p>
            <p>Seguindo: {developer.following}</p>
        </section>
    );
}