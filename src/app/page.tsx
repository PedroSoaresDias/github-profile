import Pesquisar from "@/components/Pesquisar";
import { getUserGitHub } from "./lib/getUserGitHub";
import { GetUser } from "@/components/Buttons";
import Link from "next/link";

type Dev = {
  login: string;
}

export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string;
  }
}) {
  const query = searchParams?.query || '';
  let developer: Dev = await getUserGitHub(query);

  // try {
  // } catch (error) {
  //   console.error('Erro ao buscar usuário:', error);
  // }

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      {/* <div className="bg-gray-50 p-4 rounded-md flex flex-col"> */}
        {/* <h1 className="text-gray-950 p-2 text-lg text-center font-semibold">Digita o usuário do GitHub na URL</h1>
        <p className="text-gray-950 p-2 text-lg text-center font-semibold">Dominio/user/"nome de usuário"</p> */}
        <Pesquisar placeholder="Pesquisar usuário..." />
      {developer != null && (
        <Link
          href={`/user/${developer.login}`}
          className="bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-800 transition-all duration-200"
        >
          Pesquisar
        </Link>
      )}
      {/* </div> */}
    </section>
  )
}