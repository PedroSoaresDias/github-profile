"use client"

import { use } from "react";
import { getRepositoriesByPage } from "@/app/lib/data";

export function Repositorio({ repository, currentPage }: {
  repository: string;
  currentPage: number;
}) {
  // const repositories = await getRepositoriesByPage(repository, currentPage);
  const repositories = use(getRepositoriesByPage(repository, currentPage));

  if (!repositories) return <div className="py-12 dark:bg-gray-900 bg-gray-200 flex justify-center items-center font-bold text-2xl">Nenhum repositório disponível</div>

  return (
    <section className="dark:bg-gray-900 bg-gray-200 dark:text-gray-50 text-gray-950 py-6">
      <h3 className="text-center mb-6 text-lg font-bold">Repositórios do usuário</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {repositories.map((repository: Repos) => (
          <div
            key={repository.id}
            className="card card-compact dark:bg-gray-700 bg-gray-300 mx-2 border-2 dark:border-gray-800 border-gray-400 shadow shadow-black dark:shadow-white"
          >
            <div className="card-body">
              <h3 className="card-title">{repository.name}</h3>
              <div className="card-actions justify-start">
                <a
                  href={repository.html_url}
                  target="_blank"
                  className="btn text-base bg-purple-700 text-gray-50 font-semibold hover:bg-purple-900 transition-all duration-300"
                >
                  Ver Repositório
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}