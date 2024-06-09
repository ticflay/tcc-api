# About the Project
Small and medium-sized enterprises (SMEs) play a significant role in economic and social development. The adoption and promotion of sustainable business practices are gaining momentum, driven in part by international legislation. SMEs face specific challenges in publicizing their sustainable practices. This project aims to support these enterprises in effectively measuring and reporting their performance using Environmental, Social, and Governance (ESG) criteria through the development of a web-based self-assessment tool. The proposed system offers a simplified self-assessment and performance report with improvement suggestions, ensuring transparency and visibility of the steps necessary to achieve sustainable practices.

# REST API in Node.js with TypeScript and MySQL

This repository contains a REST API developed in Node.js, using TypeScript as the main language and a MySQL database. Follow the steps below to set up and run the project on your local machine.

## Prerequisites

Before starting, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (recommended) or [npm](https://www.npmjs.com/get-npm)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (make sure you have a MySQL server running)

## Instructions

Follow these steps to set up and run the project:

1. **Clone the repository:**
```sh
git clone <repository link>
```

2. **Install dependencies:**

Navigate to the project directory and run the following command to install the dependencies using Yarn:

```sh
cd your-repository
yarn
```

or with npm:

```sh
cd your-repository
npm install
```

3. **Configure the MySQL database:**

Make sure your MySQL server is running. Then follow these steps:

- Access your MySQL server.
- Create a new schema named "projetonet":

  ```sql
  CREATE SCHEMA projetonet;
  ```

4. **Set environment variables:**

Create a `.env` file in the root directory of the project and set the necessary environment variables, including the database password and the ChatGPT API key.

```plaintext
DB_PASSWORD=your-password
API_KEY=your-key
```
Make sure to replace `your-password` with your database credentials and `your-key` with your API key.

### Running the Project

After configuring the database and environment variables, you can start the API server with the following command:

```sh
yarn run start
```

or with npm:

```sh
npm run start
```

The server will be running at http://localhost:3000 by default.

### pt-br
# Sobre o projeto
As pequenas e médias empresas tem um papel importante no desenvolvimento econômico e social, e a adoção e divulgação de práticas empresariais sustentáveis vêm ganhando cada vez mais força, inclusive por legislações internacionais. Para divulgar suas práticas sustentáveis, as pequenas e médias empresas enfrentam desafios específicos. Esse trabalho tem o objetivo de apoiar essas empresas a mensurar e relatar de forma efetiva seu desempenho, utilizando critérios Ambientais, Sociais e de Governança, através do desenvolvimento de uma ferramenta web de autoavaliação. O sistema proposto traz uma autoavaliação simplificada e relatório de desempenho com sugestões de melhoria, garantindo a transparência e visibilidade do que é necessário para atingir práticas sustentáveis.

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
