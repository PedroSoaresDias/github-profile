import Pesquisar from "@/components/Pesquisar";
import { getSearchUserGitHub } from "./lib/data";
import { GetUser } from "@/components/Buttons";
import { Developers } from "@/components/Developers";

export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string;
  }
}) {
  const query = searchParams?.query || '';
  const developers = await getSearchUserGitHub(query);

  return (
    <section className="min-h-screen bg-gray-950">
      <div className="py-5 px-10">
        <Pesquisar placeholder="Pesquisar usuário..." />
        {developers && <p className="text-white font-medium text-lg">Usuários disponíveis: {developers.total_count}</p>}
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-10 pb-4">
          {developers && developers.items.map((developer: Developers) => (
            <Developers
              id={developer.id}
              image={developer.avatar_url}
              name={developer.login}
            >
              {developer != null && <GetUser username={developer.login} />}
            </Developers>
          ))}
        </div>
      </div>
    </section>
  )
}