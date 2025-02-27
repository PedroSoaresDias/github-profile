import { getRepositoriesGitHub, getUserGitHub } from "@/app/lib/data";
import dynamic from "next/dynamic";

const Desenvolvedor = dynamic(() => import("@/components/Desenvolvedor"));
const Repositorio = dynamic(() => import("@/components/Repositorio"));
const Pagination = dynamic(() => import("@/components/Pagination"));
const UserNotFound = dynamic(() => import("@/components/UserNotFound"))

export const revalidate = 120;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams
}) {
  const { username } = await props.params;
  const { page } = await props.searchParams;
  const currentPage = Number(page) || 1;

  const developer: Developer = await getUserGitHub(username);
  const totalPages = await getRepositoriesGitHub(username);

  if (!developer) return <UserNotFound />;

  return (
    <>
      <Desenvolvedor username={developer.login} />
      {developer.public_repos != 0 && <Repositorio repository={developer.login} currentPage={currentPage} />}
      {developer.public_repos > 30 && totalPages != null && (
        <div className="pb-6 pt-2 flex w-full justify-center bg-gray-200 dark:bg-gray-900">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}