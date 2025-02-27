import Image from "next/image";
import { getUserGitHub } from "@/app/lib/data";
import Link from "next/link";

export default async function Desenvolvedor({ username }: { username: string }) {
  const developer: Developer = await getUserGitHub(username);

  const createdAt = new Date(developer.created_at).toLocaleDateString("pt-BR");
  const updadedAt = new Date(developer.updated_at).toLocaleDateString("pt-BR");

  return (
    <section className="py-2 flex flex-col justify-center items-center dark:bg-black bg-gray-100 min-h-screen text-gray-950 dark:text-gray-100" key={developer.id}>
      <Link href={"/"} className="btn btn-lg my-3 text-center text-gray-100 justify-start font-semibold text-lg bg-purple-700 rounded-xl px-6 py-2 transition-all duration-300 hover:bg-purple-900">Retornar para pesquisa</Link>
      <br />
      <div className="mockup-window mb-1 border-2 dark:border-white border-black flex flex-col justify-center items-center w-11/12 md:w-9/12 sm:w-1/2">
        <Image unoptimized className="rounded-3xl mt-3" src={developer.avatar_url} alt={`foto do usuário ${developer.login}`} width={280} height={280} quality={75} />
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
      </div>
      <a
        href={developer.html_url}
        className="btn btn-lg text-center bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 py-2 px-5 my-3 rounded-xl text-lg duration-300 mb-3 transition-all"
        target="_blank"
      >
        Saiba mais
      </a>
    </section>
  );
}