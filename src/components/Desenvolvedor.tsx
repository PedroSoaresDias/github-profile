import Image from "next/image";
import { getUserGitHub } from "@/app/lib/data";
import Link from "next/link";

export async function Desenvolvedor({ username }: { username: string }) {

  try {
    const developer: Developer = await getUserGitHub(username);

    const createdAt = new Date(developer.created_at).toLocaleDateString("pt-BR");
    const updadedAt = new Date(developer.updated_at).toLocaleDateString("pt-BR");

    return (
      <section className="py-2 flex flex-col justify-center items-center bg-black min-h-screen text-gray-50" key={developer.id}>
        <Link href={"/"} className="my-3 text-center text-gray-50 justify-start font-semibold text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-900">Retornar para pesquisa</Link>
        <br />
        <div className="flex flex-col  justify-center items-center w-11/12 md:w-9/12 sm:w-1/2">
          <Image unoptimized className="rounded-3xl mt-3" src={developer.avatar_url} alt={developer.login} width={300} height={300} />
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
            className="text-center bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 py-2 px-5 rounded-lg text-lg duration-300 mb-3 transition-all"
            target="_blank"
          >
            Saiba mais
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error)
    return <p>Ocorreu um erro ao buscar o usuário</p>
  }
}