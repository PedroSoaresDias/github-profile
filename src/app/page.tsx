import Image from 'next/image';
import axios from 'axios';


async function getUserGitHub() {
  const user = await axios.get("https://api.github.com/users/{username}"); // O username é para escrever o nome de usuário do GitHub
  return user.data;
}

export default async function Home() {

  const developer = await getUserGitHub()
  
  return (
      <section key={developer.id}>
            <Image src={developer.avatar_url} alt={developer.login} width={400} height={400} />
            <br />
            <h3>Nome de usuário: {developer.login}</h3>
            <br />
            <p>Tipo da conta: {developer.type ? developer.type : "Desconhecido"}</p>
            <p>Data de criação: {developer.created_at}</p>
            <p>Última atualização: {developer.updated_at}</p>
            <p>Sua descrição: {developer.bio ? developer.bio : "Não informado"}</p>
            <p>Repositórios públicos: {developer.public_repos}</p>
            <p>Seguidores: {developer.followers}</p>
            <p>Seguindo: {developer.following}</p>
        </section>
 )
}