import Pesquisar from "@/components/Pesquisar";

export default function Home() {
  
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="bg-gray-50 p-6 rounded-md flex flex-col">
        <Pesquisar />
      </div>
    </section>
  )
}