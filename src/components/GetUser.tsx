import Link from "next/link"

export default function GetUser({ username }: { username: string }) {
  return (
    <Link
      href={`/user/${username}`}
      className="btn bg-purple-700 text-center text-white text-lg px-4 py-2 font-semibold hover:bg-purple-800 transition-all duration-300"
    >
      Pesquisar
    </Link>
  )
}