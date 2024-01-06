import { getSearchUserGitHub } from "@/app/lib/data";
import Pesquisar from "./Pesquisar";
import Image from "next/image";
import { GetUser } from "./Buttons";

export default async function Developers({ searchParams }: {
  searchParams?: {
    query?: string;
  }
}) {
  const query = searchParams?.query || '';
  const developers = await getSearchUserGitHub(query);

  return (
    <section className="min-h-screen bg-gray-950">
      <div>
        <Pesquisar placeholder="Pesquisar usuário..." />
        {developers != null && <p>Usuários disponíveis: {developers.total_count}</p>}
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {developers != null && developers.items.map((developer: Developers) => {
            <div key={developer.id} className="border-2 border-white rounded-lg shadow shadow-gray-500 p-3">
              <Image
                src={developer.avatar_url}
                alt={developer.login}
                width={85}
                height={85}
                quality={75}
                className="rounded-full my-2"
              />
              <h2 className="text-center font-semibold text-white">{developer.login}</h2>
              {developer != null && <GetUser username={developer.login} />}
            </div>
          })}
        </div>
      </div>
    </section>
  )
}