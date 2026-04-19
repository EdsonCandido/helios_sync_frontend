# PR: Criação da Tela de Login e Estrutura Inicial do Frontend

## Objetivo
Estabelecer a base do projeto frontend e implementar a página de login interativa da aplicação Helios ITR, seguindo as diretrizes de arquitetura, padrões visuais e regras do projeto.

## Alterações
- Criação e configuração do projeto frontend utilizando React, Vite e TypeScript.
- Configuração do Biome para formatação e linting do código.
- Configuração do Chakra UI v3, incluindo instalação de snippets e temas.
- Criação dos componentes visuais `LoginForm` e `Login` (página principal), contendo validações e responsividade.
- Inclusão do gerenciamento global de estado/notificações no `main.tsx` (`Provider`, `Toaster`).
- Inclusão dos documentos essenciais para a manutenção do padrão de desenvolvimento, como `padrao-commits.md` e regras de documentação no `agents.md`.

## Endpoints afetados (se houver)
- N/A

## Regras de negócio
- O token JWT e a validação do backend não foram implementados nesta etapa, sendo apenas um "mock" de login (com um temporizador).
- Adicionado regra formal exigindo documentação em Markdown no `/docs` para qualquer PR submetido, com base nos padrões do `agents.md`.

## Observações
- Este PR reflete a inicialização completa do fluxo visual de Autenticação do lado do cliente.
