# API REST em Node.js com TypeScript e MySQL

Este é repositório contém uma API REST desenvolvida em Node.js, utilizando TypeScript como linguagem principal e um banco de dados MySQL. Siga as etapas abaixo para configurar e executar o projeto em sua máquina local.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (recomendado) ou [npm](https://www.npmjs.com/get-npm)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (certifique-se de ter um servidor MySQL em execução)

## Instruções

Siga estas etapas para configurar e executar o projeto:

1. **Clonar o repositório:**
git clone <copiar link do repositório>

2. **Instalar as dependências:**

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências com o Yarn:

```sh
cd seu-repositorio
yarn
```


ou com o npm:

```sh
cd seu-repositorio
npm install
```


3. **Configurar o banco de dados MySQL:**

Certifique-se de que o seu servidor MySQL esteja em execução. Em seguida, siga estas etapas:

- Acesse o seu servidor MySQL.
- Crie um novo schema chamado "projetonet":

  ```sql
  CREATE SCHEMA projetonet;
  ```

4. **Configurar variáveis de ambiente:**

Crie um arquivo `.env` no diretório raiz do projeto e configure as variáveis de ambiente necessárias, com a senha do banco de dados e a api key do chat gpt.  

```plaintext
DB_PASSWORD=sua-senha
API_KEY=your_key
```
Certifique-se de substituir  sua-senha pelas credenciais do seu banco de dados e your_key pela chave da API.

### Executar o projeto

Após configurar o banco de dados e as variáveis de ambiente, você pode iniciar o servidor da API com o seguinte comando:

```sh
yarn run start
```

ou com npm:

```sh
npm run start
```

O servidor estará em execução em http://localhost:3000 por padrão.
