import { getRepositoriesGitHub } from "@/app/lib/data";

export async function Repositorio({ repository }: { repository: string }) {
  const repositories = await getRepositoriesGitHub(repository);

  if (!repositories) return <div className="py-12 bg-gray-900 flex justify-center items-center font-bold text-2xl">Nenhum repositório disponível</div>

  return (
    <section className="bg-gray-900 text-gray-50 py-6">
      <h3 className="text-center mb-6 text-lg font-bold">Repositórios do usuário</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {repositories.map((repository: Repos) => (
          <div
            key={repository.id}
            className="bg-gray-700 p-2 mx-3 border-2 rounded-lg border-gray-800 shadow shadow-white"
          >
            <h3 className="mb-3">{repository.name}</h3>
            <a
              href={repository.html_url}
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