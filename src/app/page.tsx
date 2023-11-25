import Pesquisar from "@/components/Pesquisar";
import { getUserGitHub } from "./lib/getUserGitHub";
import { GetUser } from "@/components/Buttons";

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

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="border-2 border-white p-4 rounded-lg flex flex-col">
        <Pesquisar placeholder="Pesquisar usuário..." />
        {developer != null && <GetUser username={developer.login} />}
      </div>
    </section>
  )
}