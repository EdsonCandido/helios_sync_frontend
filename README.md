# Helios ITR

## 📌 Sobre o Projeto

O Helios ITR é uma aplicação web baseada em uma arquitetura **SPA (Single Page Application)** aliada a um backend **RESTful**. O sistema incorpora autenticação JWT e segue diretrizes rigorosas de desenvolvimento e segurança.

## 🚀 Tecnologias (Stack Principal)

- **Frontend:** React + Vite + TypeScript
- **UI:** Chakra UI (v3.34.0+)
- **Backend:** Spring Boot (Java 22)
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT (Stateless)
- **Qualidade de Código:** Biome (substituindo ESLint/Prettier)

## 🏗️ Arquitetura e Padrões

Para conhecer profundamente os padrões arquiteturais, de tipagem, uso de Dark Mode, convenções de código e anti-patterns a serem evitados, consulte o arquivo **[`agents.md`](./agents.md)**. Ele é a principal referência técnica e de arquitetura do projeto.

## 🛠️ Status do Desenvolvimento

Conforme documentado em nosso diretório histórico **[`/docs`](./docs/)**:
- **Frontend Inicializado:** Base estabelecida com o template Vite + React + TS.
- **Página de Login:** Implementada com suporte nativo ao Dark Mode e Toggle de Tema.
- **Autenticação e Roteamento:** Contexto de autenticação (`AuthContext`), rotas protegidas e Layout de Dashboard integrados.
- **Dockerização:** Infraestrutura de containerização configurada com Nginx para ambiente de produção.
- **Ferramental de Linting:** Biome configurado para linting e formatação em todo o projeto.

## 📜 Padrão de Commits

A fim de manter clareza e rastreabilidade no histórico, o projeto adota um padrão rigoroso de commits estruturados, **obrigatoriamente em português**. 

Formato base: `<tipo>(<escopo>): <descrição curta>`
Exemplo: `feat(auth): criar tela de login`

Para consultar os tipos permitidos, escopos e outras regras, leia a documentação oficial do nosso padrão no arquivo **[`padrao-commits.md`](./padrao-commits.md)**.

## 📝 Documentação Obrigatória

Toda interação no projeto (nova feature, bugfix, refatoração, PRs) **DEVE** gerar documentação salva na pasta `/docs`.

Estrutura:
- `/docs/evolutiva/`: Documentos que registram a evolução diária (arquivos no padrão `YYYY-MM-DD_nome-da-tarefa.md`).
- `/docs/prs_commits/`: Registros de Pull Requests e espelhos dos padrões de commit do projeto.

## ⚙️ Instalação e Execução

### Execução Local (Desenvolvimento)

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento Vite
npm run dev

# 3. Verificação de código com Biome
npm run lint
npm run format
```

### Execução via Docker (Produção)

O projeto conta com automação para build e execução em container:

```bash
# Permissão de execução no script
chmod +x start_docker.sh

# Build e execução automática (acessível em localhost:81)
./start_docker.sh
```
