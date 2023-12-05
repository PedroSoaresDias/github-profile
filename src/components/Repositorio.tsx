import { getReposGitHub } from "@/app/lib/data";

export async function Repositorio({ repository }: { repository: string }) {
    const repos = await getReposGitHub(repository);

    if (!repos) return <div className="py-12 bg-gray-900 flex justify-center items-center font-bold text-2xl">Nenhum repositório disponível</div>

    return (
        <section className="bg-gray-900 py-3">
            <div className="grid grid-cols-4 gap-3">
                {repos.map((repo: Repos) => (
                    <div
                        key={repo.id}
                        className="bg-gray-700 p-2 border-2 border-gray-800 shadow-md shadow-white"
                    >
                        <h3>{repo.name}</h3>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            className="no-underline px-5 py-2 text-base bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 transition-all duration-300 rounded-lg"
                        >
                            Ver Repositório
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}