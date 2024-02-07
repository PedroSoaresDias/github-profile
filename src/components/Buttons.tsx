import Link from "next/link"

export function GetUser({ username }: { username: string }) {
  return (
    <Link
      href={`/user/${username}`}
      className="bg-purple-700 text-center text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-800 transition-all duration-300"
    >
      Pesquisar
    </Link>
  )
}

export function UserNotFound() {
  return (
    <div className="flex flex-col bg-black text-gray-50 min-h-screen justify-center items-center">
      <h2 className="text-4xl">Usuário não encontrado!</h2>
      <p className="text-xl mt-3">Esse usuário pode não existir na plataforma.</p>
      <Link href={"/"} className="mt-6 text-center text-gray-50 text-lg bg-purple-700 rounded-lg px-6 py-2 transition-all duration-300 hover:bg-purple-800 ">Retornar para página inicial</Link>
    </div>
  )
}