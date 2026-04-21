# Implementação da Troca de Tema (Dark/Light Mode)

## Objetivo
Implementar a funcionalidade de alternância entre os temas claro e escuro no frontend da aplicação, com foco na tela de login conforme solicitado pelo usuário.

## Alterações
- [NEW] `src/components/ThemeToggle.tsx`: Novo componente reutilizável de botão flutuante para troca de tema.
- [MODIFY] `src/pages/Login.tsx`: Integração do `ThemeToggle` no canto superior direito da tela de login.

## Regras de negócio
- O tema deve ser persistido localmente (gerenciado pelo `next-themes` integrado ao Chakra UI v3).
- O botão de troca de tema deve ser redondo, sem texto e com posicionamento fixo/absoluto.
- As cores do botão variam de acordo com o tema selecionado para manter o contraste e a estética premium.

## Observações
- A implementação utiliza o `useColorMode` do Chakra UI v3, que por sua vez utiliza o `ThemeProvider` do `next-themes`.
- O componente foi projetado para ser "sticky" e ficar visível mesmo se houver rolagem na página (embora a tela de login seja centralizada).
