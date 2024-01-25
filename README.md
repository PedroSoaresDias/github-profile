# GitHub Profile

Esse projeto foi desenvolvido para possa pesquisar o usuário do GitHub, onde mostra sobre ele como:(nome de usuário, data de criação, data de atualização, sua descrição e etc.), e mostra os seus repositórios que estão definidos como público.

Para visualizar o projeto, [clice aqui](https://github-profile-lac.vercel.app).

## Como foi o desenvolvimento

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Next.JS](https://nextjs.org/) com a configuração App Router.
- React através do Framework Next.JS para usar o conceito do React Server Components.
- TypeScript para desenvolver o projeto e deixar a tipagem mais robusta.
- [Tailwind CSS](https://tailwindcss.com/) para fazer a estilização do projeto.
- API do GitHub para obter os dados do usuário e seus repositórios.

## A utilização da API

A API do GitHub é usada da seguinte forma:

Pesquisar os usuários disponíveis:
``` bash
https://api.github.com/search/users?q={nome de usuário}
```

Mostrar sobre o usuário escolhido:
``` bash
https://api.github.com/users/{nome de usuário}
```

Obter os repositórios do usuário:
``` bash
https://api.github.com/users/{nome de usuário}/repos
```

Obter os repositórios do usuário com paginação, está definido 30 repositórios por página como padrão:
``` bash
https://api.github.com/users/{username}/repos?per_page=30&page={número de páginas}
```

## A execução do projeto

Quando a página principal for acessada, possui um campo de pesquisar, quando digitar o usuário de sua escolha, vai mostrar todos os usuários disponíveis dentro da API, essa nova forma de pesquisar foi para facilitar a busca do usuário, mesmo se não souber completamente.

Depois de encontrar o usuário, pode ver as informações sobre o usuário específico, como: (Sua foto de perfil, seu nome de usuário, quando se registrou, sua última atualização, sua descrição de perfil, quantos seguidores possui, quantos está seguindo, e um botão de saiba mais para mais detalhes.), quando estiver na página do usuário, tem uma seção para os repositórios, mas a seção de repositórios vai está disponível se tiver pelo menos um repositório como público, nessa seção possui um sistema de paginação, e também só está disponível se tiver mais de 30 repositórios públicos.

## Caso não encontro o usuário

Se a busca não retornar resultados, algumas razões podem ser:

- O usuário não existe na plataforma GitHub.
- O usuário foi digitado incorretamente, mesmo que tenha certeza de quem está procurando.
- A API pode não estar disponível no momento devido ao alcance do limite de acessos.

**Dicas:**

- Verifique a ortografia do nome de usuário.
- Certifique-se de que a API do GitHub está acessível.
