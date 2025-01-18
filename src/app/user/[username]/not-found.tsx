import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col dark:bg-black bg-white text-gray-950 dark:text-gray-50 min-h-screen justify-center items-center">
      <h2 className="text-4xl">Rota não encontrada!</h2>
      <p className="text-xl mt-3">Esse caminho não foi encontrado na plataforma.</p>
      <Link href={"/"} className="btn mt-6 text-center text-gray-50 text-lg bg-purple-700 px-6 py-2 transition-all duration-300 hover:bg-purple-800 ">Retornar para página inicial</Link>
    </div>
  )
}