import Link from "next/link"

export function GetUser({ username }: { username: string }) {
    return (
        <Link
            href={`/user/${username}`}
            className="bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-800 transition-all duration-200"
        >
            Pesquisar
        </Link>
    )
}