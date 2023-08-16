// import Pesquisar from '@/components/pesquisa';
import axios from 'axios'
import Image from 'next/image';

async function getUserGitHub() {
  const user = await axios.get(`https://api.github.com/users/{usuario}`)

  return user.data;
}

export default async function Home() {
  
  const developer = await getUserGitHub();
  
  return (
    <section key={developer.id}>
      <Image src={developer.avatar_url} alt={developer.login} width={360} height={360} quality={75}/>
      <h3>Nome de usuário: {developer.login}</h3>
      <p>Tipo da conta: {developer.type}</p>
      <p>Descrição: {developer.bio ? developer.bio : "Não informado"}</p>
      <p>Data de criação: {developer.created_at}</p>
      <p>Última atualização: {developer.updated_at}</p>
      <p>Repositórios públicos: {developer.public_repos}</p>
      <p>Seguidores: {developer.followers}</p>
      <p>Seguindo: {developer.following}</p>
    </section>
    // <Pesquisar />
    // <section className="flex min-h-screen items-center justify-center bg-gray-950">
    //   <div className="bg-gray-50 p-6 flex flex-col">
    //     <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
    //     {/* <Pesquisar /> */}
    //   </div>
    // </section>
  );
}
// <section className="flex min-h-screen items-center justify-center bg-gray-950">
//   <div className="bg-gray-50 p-6 flex flex-col">
//     <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
//     <input type="text" className="bg-gray-150 border-2 rounded border-purple-600 transition-all duration-100 hover:shadow hover:shadow-purple-700 my-5" placeholder="Nome de usuário" />
//     <Link href="/usuario/[user]" className="bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded">Ver Perfil</Link>
//   </div>
// </section>