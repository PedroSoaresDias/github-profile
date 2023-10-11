// import Pesquisar from "@/components/Pesquisar";

export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="bg-gray-50 p-4 rounded-md flex flex-col">
        <h1 className="text-gray-950 p-2 text-lg text-center font-semibold">Digita o usuário do GitHub na URL</h1>
        <p className="text-gray-950 p-2 text-lg text-center font-semibold">Dominio/user/"nome de usuário"</p>
        {/* <Pesquisar /> */}
      </div>
    </section>
  )
}