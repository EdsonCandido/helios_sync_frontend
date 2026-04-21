# PR: Implementação da Funcionalidade de Troca de Tema

## Objetivo
Implementar a funcionalidade de alternância de tema (Dark/Light mode) no frontend, permitindo que o usuário escolha sua preferência visual diretamente na tela de login.

## Alterações
- Criação do componente `ThemeToggle.tsx` com estilo redondo e ícones dinâmicos.
- Integração do `ThemeToggle` na página de `Login.tsx` como um botão flutuante.
- Inclusão de documentação técnica em `docs/evolutiva/2026-04-21_implementacao-troca-tema.md`.
- Formatação de arquivos existentes (`LoginForm.tsx`) via Biome para manter o padrão do projeto.

## Endpoints afetados (se houver)
- N/A

## Regras de negócio
- O tema é persistido localmente via `next-themes`.
- O botão segue os requisitos de ser redondo, sem texto e posicionado no canto superior direito.

## Observações
- A implementação respeita a arquitetura do Chakra UI v3 e as diretrizes do `agents.md`.
