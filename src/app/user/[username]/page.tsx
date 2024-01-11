import { getRepositoriesGitHub, getUserGitHub } from "@/app/lib/data";
import { UserNotFound } from "@/components/Buttons";
import { Desenvolvedor } from "@/components/Desenvolvedor";
import Pagination from "@/components/Pagination";
import { Repositorio } from "@/components/Repositorio";
import { Suspense } from "react";

export default async function Page({ params: { username }, searchParams }: {
  params: { username: string };
  searchParams?: {
    page?: string;
  }
}) {
  const currentPage = Number(searchParams?.page) ?? 1;

  try {
    const developer: Developer = await getUserGitHub(username);
    const totalPages = await getRepositoriesGitHub(username)

    if (!developer) return <UserNotFound />;

    return (
      <>
        <Suspense fallback={<div className="bg-black min-h-screen flex justify-center items-center text-white font-semibold">Carregando...</div>}>
          <Desenvolvedor username={developer.login} />
          {developer.public_repos != 0 && <Repositorio repository={developer.login} currentPage={currentPage} />}
          {developer.public_repos > 30 && totalPages != null && <Pagination totalPages={totalPages}/>}
        </Suspense>
      </>
    );
  } catch (error) {
    console.log(error);
    return <p>Ocorreu um erro ao buscar o usuário</p>
  }
}