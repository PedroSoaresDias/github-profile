import { getReposGitHub, getUserGitHub } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({ params: { username } }: { params: { username: string } }) {

    try {
        const developerData: Developer = await getUserGitHub(username);
        const reposData = await getReposGitHub(username);

        const [developer, repos] = await Promise.all([developerData, reposData])

        if (!developer) {
            return (
                <div className="flex flex-col min-h-screen justify-center items-center">
                    <div className=" text-4xl">Usuário não encontrado</div>
                    <Link href={"/"} className="mt-6 text-center text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-800 ">Retornar para pesquisa</Link>
                </div>
            )
        }

        const createdAt = new Date(developer.created_at).toLocaleDateString("pt-BR");
        const updadedAt = new Date(developer.updated_at).toLocaleDateString("pt-BR");

        if (!repos) return <div className="py-12 bg-gray-900 flex justify-center items-center font-bold text-2xl">Nenhum repositório disponível</div>

        return (
            <>
                <Suspense fallback={<div className="bg-black min-h-screen flex justify-center items-center">Carregando...</div>}>
                    <section className="py-2 flex flex-col justify-center items-center bg-black min-h-screen text-gray-50" key={developer.id}>
                        <Link href={"/"} className="my-3 text-center justify-start font-semibold text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-800 ">Retornar para pesquisa</Link>
                        <br />
                        <div className="flex flex-col  justify-center items-center w-11/12 md:w-9/12 sm:w-1/2">
                            <Image className="rounded-3xl mt-3" src={developer.avatar_url} alt={developer.login} width={300} height={300} />
                            <br />
                            <h3 className="text-center inline-block">{developer.login}</h3>
                            <br />
                            <div className="justify-start gap-1 p-1 m-1">
                                <p>Tipo da conta: {developer.type}</p>
                                <p>Data de criação: {createdAt}</p>
                                <p>Última atualização: {updadedAt}</p>
                                <p>Sua descrição: {developer.bio ? developer.bio : "Não Informado"}</p>
                                <p>Repositórios públicos: {developer.public_repos}</p>
                                <p>Seguidores: {developer.followers}</p>
                                <p>Seguindo: {developer.following}</p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-900 text-gray-50 py-6">
                        <h3 className="text-center my-3 text-lg font-bold">Repositórios do usuário</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                            {repos.map((repo: Repos) => (
                                <div
                                    key={repo.id}
                                    className="bg-gray-700 p-2 mx-3 border-2 rounded-lg border-gray-800 shadow shadow-white"
                                >
                                    <h3 className="mb-3">{repo.name}</h3>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        className="no-underline px-3 py-2 bg-purple-700 text-white hover:bg-purple-800 transition-all duration-300 rounded-lg"
                                    >
                                        Ver Repositório
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </Suspense>
            </>
        );
    } catch (error) {
        console.log(error);
        return <p>Ocorreu um erro ao buscar o usuário</p>
    }

}