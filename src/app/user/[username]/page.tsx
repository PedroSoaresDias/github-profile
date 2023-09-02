'use client'

import Image from "next/image";
import { getUserGitHub } from "@/app/api/getUserGitHub";
import useSWR from "swr";

export default function Usuario({ username }: { username: string }) {

    const { data: developer, error } = useSWR(`https://api.github.com/users/${username}`, getUserGitHub);
    
    if (error) return <div>Erro ao carregar</div>
    // if (!developer) return <div className="flex justify-center items-center text-4xl">Carregando...</div>

    return (
        <section key={developer?.id}>
            <Image src={developer?.avatar_url} alt={developer?.login} width={400} height={400} />
            <br />
            <h3>Nome de usuário: {developer?.login}</h3>
            <br />
            <p>Tipo da conta: {developer?.type ? developer?.type : "Desconhecido"}</p>
            <p>Data de criação: {developer?.created_at}</p>
            <p>Última atualização: {developer?.updated_at}</p>
            <p>Sua descrição: {developer?.bio ? developer?.bio : "Não Informado"}</p>
            <p>Repositórios públicos: {developer?.public_repos}</p>
            <p>Seguidores: {developer?.followers}</p>
            <p>Seguindo: {developer?.following}</p>
        </section>
    );
}