import Pesquisar from "@/components/Pesquisar";

export default function Home(developer: string) {
  
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="bg-gray-50 p-6 rounded-md flex flex-col">
        <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
        <Pesquisar username={developer} />
      </div>
    </section>
  )
}