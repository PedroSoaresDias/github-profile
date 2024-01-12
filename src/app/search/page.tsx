import { getSearchUserGitHub } from "@/app/lib/data";
import Pesquisar from "../../components/Pesquisar";
// import Image from "next/image";
// import { GetUser } from "../../components/Buttons";
import Developers from "@/components/Developers";

export default async function Page({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const developers = await getSearchUserGitHub(query);

  return (
    <section className="min-h-screen bg-gray-950">
      <div className="py-5 px-10">
        <Pesquisar placeholder="Pesquisar usuário..." />
        {developers && <p className="text-white font-medium text-lg">Usuários disponíveis: {developers.total_count}</p>}
      </div>
      <Developers query={query} currentPage={currentPage} />
      {/* <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-10 pb-4">
          {developers && developers.items.map((developer: Developers) => (
            <div key={developer.id} className="border-2 border-white rounded-lg w-50 text-center shadow shadow-gray-500 p-3">
              <Image
                unoptimized
                src={developer.avatar_url}
                alt={developer.login}
                width={100}
                height={100}
                quality={75}
                className="rounded-full mx-auto"
              />
              <h2 className="text-center font-semibold my-2 text-white">{developer.login}</h2>
              {developer != null && <GetUser username={developer.login} />}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}