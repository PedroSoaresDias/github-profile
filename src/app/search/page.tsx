import { getSearchUserGitHub } from "@/app/lib/data";
import Pesquisar from "../../components/Pesquisar";
import Image from "next/image";
import { GetUser } from "../../components/Buttons";

export default async function Page({ searchParams }: {
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
        {developers && <p>Usuários disponíveis: {developers.total_count}</p>}
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {developers && developers.map((developer: Developers) => {
            <div key={developer.items.id} className="border-2 border-white rounded-lg shadow shadow-gray-500 p-3">
              <Image
                src={developer.items.avatar_url}
                alt={developer.items.login}
                width={85}
                height={85}
                quality={75}
                className="rounded-full my-2"
              />
              <h2 className="text-center font-semibold text-white">{developer.items.login}</h2>
              {developer != null && <GetUser username={developer.items.login} />}
            </div>
          })}
        </div>
      </div>
    </section>
  )
}