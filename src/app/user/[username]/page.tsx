import { getRepositoriesGitHub, getUserGitHub } from "@/app/lib/data";
import { UserNotFound } from "@/components/Buttons";
import { Desenvolvedor } from "@/components/Desenvolvedor";
import Pagination from "@/components/Pagination";
import { Repositorio } from "@/components/Repositorio";

export default async function Page({ params: { username }, searchParams }: {
  params: { username: string };
  searchParams?: {
    page?: string;
  }
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const developer: Developer = await getUserGitHub(username);
  const totalPages = await getRepositoriesGitHub(username);

  if (!developer) return <UserNotFound />;

  return (
    <>
      <Desenvolvedor username={developer.login} />
      {developer.public_repos != 0 && <Repositorio repository={developer.login} currentPage={currentPage} />}
      {developer.public_repos > 30 && totalPages != null && (
        <div className="pb-6 pt-2 flex w-full justify-center bg-gray-900">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}