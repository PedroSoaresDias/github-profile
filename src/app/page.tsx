// import Pesquisar from "@/components/Pesquisar";
import dynamic from "next/dynamic";
import { getSearchUserGitHub } from "./lib/data";
// import GetUser from "@/components/GetUser";
// import Developers from "@/components/Developers";

const Pesquisar = dynamic(() => import("@/components/Pesquisar"));
const GetUser = dynamic(() => import("@/components/GetUser"));
const Developers = dynamic(() => import("@/components/Developers"));

export const revalidate = 120;

export default async function Home(props: {
  searchParams: SearchParams
}) {
  const { query } = await props.searchParams;
  const userQuery = query ?? "";
  const developers = await getSearchUserGitHub(userQuery);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="py-5 px-10">
        <Pesquisar placeholder="Pesquisar usuário..." />
        {developers && <p className="dark:text-white text-black font-medium text-lg">Usuários disponíveis: {developers.total_count}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-10 pb-4">
        {developers && developers.items.map((developer: Developers) => (
          <Developers
            key={developer.id}
            id={developer.id}
            image={developer.avatar_url}
            name={developer.login}
          >
            <GetUser username={developer.login} />
          </Developers>
        ))}
      </div>
    </section>
  )
}