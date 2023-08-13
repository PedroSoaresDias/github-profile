import axios from 'axios'

export default function Home() {
  

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="bg-gray-50 p-6 flex flex-col">
        <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
        {/* <Pesquisar /> */}
      </div>
    </section>
  );
}
// <section className="flex min-h-screen items-center justify-center bg-gray-950">
//   <div className="bg-gray-50 p-6 flex flex-col">
//     <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
//     <input type="text" className="bg-gray-150 border-2 rounded border-purple-600 transition-all duration-100 hover:shadow hover:shadow-purple-700 my-5" placeholder="Nome de usuário" />
//     <Link href="/usuario/[user]" className="bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded">Ver Perfil</Link>
//   </div>
// </section>