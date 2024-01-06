import { getRepositoriesGitHub, getUserGitHub } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({ params: { username } }: { params: { username: string } }) {

  try {
    const developerData: Developer = await getUserGitHub(username);
    const repositoriesData = await getRepositoriesGitHub(username);

    const [developer, repositories] = await Promise.all([developerData, repositoriesData])

    if (!developer) {
      return (
        <div className="flex flex-col bg-black text-gray-50 min-h-screen justify-center items-center">
          <div className=" text-4xl">Usuário não encontrado</div>
          <Link href={"/"} className="mt-6 text-center text-gray-50 text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-800 ">Retornar para pesquisa</Link>
        </div>
      )
    }

    const createdAt = new Date(developer.created_at).toLocaleDateString("pt-BR");
    const updadedAt = new Date(developer.updated_at).toLocaleDateString("pt-BR");

    if (!repositories) return <div className="py-12 bg-gray-900 flex justify-center items-center font-bold text-2xl">Nenhum repositório disponível</div>

    return (
      <>
        <Suspense fallback={<div className="bg-black min-h-screen flex justify-center items-center">Carregando...</div>}>
          <section className="py-2 flex flex-col justify-center items-center bg-black min-h-screen text-gray-50" key={developer.id}>
            <Link href={"/"} className="my-3 text-center text-gray-50 justify-start font-semibold text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-900">Retornar para pesquisa</Link>
            <br />
            <div className="flex flex-col  justify-center items-center w-11/12 md:w-9/12 sm:w-1/2">
              <Image className="rounded-3xl mt-3" src={developer.avatar_url} alt={developer.login} width={300} height={300} />
              <br />
              <h3 className="text-center font-semibold inline-block">{developer.login}</h3>
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
              <a
                href={developer.html_url}
                className="text-center bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 py-2 px-10 rounded-lg text-lg duration-300 mb-3 transition-all"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </section>
          <section className="bg-gray-900 text-gray-50 py-6">
            <h3 className="text-center mb-6 text-lg font-bold">Repositórios do usuário</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {repositories.map((repository: Repos) => (
                <div
                  key={repository.id}
                  className="bg-gray-700 p-2 mx-3 border-2 rounded-lg border-gray-800 shadow shadow-white"
                >
                  <h3 className="mb-3">{repository.name}</h3>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    className="no-underline px-5 py-2 text-base bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 transition-all duration-300 rounded-lg"
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