import { getUserGitHub } from "@/app/lib/data";
import { UserNotFound } from "@/components/Buttons";
import { Desenvolvedor } from "@/components/Desenvolvedor";
import { Repositorio } from "@/components/Repositorio";
import { Suspense } from "react";

export default async function Page({ params: { username } }: { params: { username: string } }) {
  try {
    const developer: Developer = await getUserGitHub(username);

    if (!developer) return <UserNotFound />;

    return (
      <>
        <Suspense fallback={<div className="bg-black min-h-screen flex justify-center items-center">Carregando...</div>}>
          <Desenvolvedor username={developer.login} />
          <Repositorio repository={developer.login} />
        </Suspense>
      </>
    );
  } catch (error) {
    console.log(error);
    return <p>Ocorreu um erro ao buscar o usuário</p>
  }
}