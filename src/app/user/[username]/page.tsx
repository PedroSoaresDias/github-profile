'use client'

import Image from "next/image";
import { getUserGitHub } from "@/app/api/getUserGitHub";
import useSWR from "swr";

interface User{
    id: number;
    login: string;
    avatar_url: string;
    type: string;
    created_at: string;
    updated_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface UsuarioProps{
    username: string;
}

export default function Usuario({username}: UsuarioProps) {

    const { data: developer, error } = useSWR<User>(username, getUserGitHub);
    
    if (error) {
        if (error.response && error.response.status === 404) {
            <div>Usuário não encontrado</div>
        } else {
            return <div>Erro ao carregar</div>
        }
    }

    if (!developer) return <div className="flex justify-center items-center text-4xl">Carregando...</div>

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