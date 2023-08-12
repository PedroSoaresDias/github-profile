import Image from "next/image";

async function getUserGitHub(username: string) {
    const user = await fetch(`https://api.github.com/users/${username}`);
    return user.json();
}

export default async function User({
    params: { username },
  }: {
    params: { username: string }
    }) {
    
    const user = await getUserGitHub(username);

    return (
        <section key={user.id}>
            <Image src={user.avatar_url} alt={user.login} width={400} height={400} />
            <br />
            <h3>Nome de usuário: {user.login}</h3>
            <br />
            <p>Data de criação: {user.created_at}</p>
            <p>Última atualização: {user.updated_at}</p>
            <p>Tipo da conta: {user.type}</p>
            <p>Sua descrição: {user.bio}</p>
            <p>Repositórios públicos: {user.public_repos}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Seguindo: {user.following}</p>
        </section>
    )
}