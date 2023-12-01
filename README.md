# GitHub Profile

Esse projeto foi desenvolvido para possa pesquisar o usuário do GitHub, onde mostra sobre ele como:(nome de usuário, data de criação, data de atualização, sua descrição e etc.), e mostra os seus repositórios que estão definidos como público.

Para visualizar o projeto, [clice aqui](https://github.profile-lac.vercel.app).

## Como foi o desenvolvimento

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Next.JS](https://nextjs.org/) com a configuração App Router.
- React através do Framework Next.JS para usar o conceito do React Server Components.
- TypeScript para desenvolver o projeto e deixar a tipagem mais robusta.
- [Tailwind CSS](https://tailwindcss.com/) para fazer a estilização do projeto.
- API do GitHub para obter os dados do usuário e seus repositórios.

## A utilização da API

A API do GitHub é usada da seguinte forma:

A forma de encontrar o usuário:
``` bash
https://api.github.com/users/{username}
```

A forma para obter os repositórios do usuário:
``` bash
https://api.github.com/users/{username}/repos
```

## A ideia do projeto

A ideia para desenvolver esse projeto foi o seguinte, na página principal, possui um campo de pesquisa onde colocar o nome do usuário da plataforma, aparece um botão quando a API encontra o usuário, ao clicar no botão, vai a página do usuário escolhido, que mostra as informações sobre ele e seus repositórios, e um botão que vai para o repositório do GitHub.

## Caso não encontro o usuário

Se a busca não retornar resultados, algumas razões podem ser:

- O usuário não existe na plataforma GitHub.
- O usuário foi digitado incorretamente, mesmo que tenha certeza de quem está procurando.
- A API pode não estar disponível no momento devido ao alcance do limite de acessos.

**Dicas:**

- Verifique a ortografia do nome de usuário.
- Certifique-se de que a API do GitHub está acessível.
