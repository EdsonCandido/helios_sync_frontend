# Criação da Tela de Login

## Objetivo
Inicializar o projeto frontend utilizando a stack padrão (React, Vite, TypeScript, Chakra UI) e construir uma tela de login moderna e com design premium.

## Alterações
- Deleção do diretório `frontend` anterior (que utilizava JavaScript/Vanilla CSS).
- Criação de um novo projeto Vite com o template `react-ts`.
- Instalação das dependências do Chakra UI (`@chakra-ui/react`, `@emotion/react`, `@emotion/styled`, `framer-motion`).
- Instalação e configuração do Biome (`@biomejs/biome`) para linting e formatação, substituindo ESLint e Prettier.
- Adição dos scripts `lint` e `format` no `package.json`.
- Criação dos componentes `Login.tsx` e `LoginForm.tsx` com tipagem forte e design responsivo.
- Configuração do `ChakraProvider` no `main.tsx`.

## Endpoints afetados (se houver)
- N/A (Apenas frontend estático no momento).

## Regras de negócio
- O formulário de login exige Email e Senha.
- Componentes separados e tipados com TypeScript.
- Design alinhado com o Dark Mode suportado pelo Chakra UI.

## Observações
- A configuração do Biome foi inicializada para garantir código padronizado.
- O CSS global não será utilizado diretamente; o tema é controlado via Chakra UI.
