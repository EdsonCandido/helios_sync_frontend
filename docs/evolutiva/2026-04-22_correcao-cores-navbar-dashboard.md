# Correção de Cores da Navbar e Sidebar

## Objetivo
Ajustar a Navbar do Dashboard para utilizar a cor azul da marca (conforme tela de login) e garantir que Sidebar e Navbar reajam corretamente à troca de tema.

## Alterações
- Navbar alterada para `blue.600` (Light) e `blue.900` (Dark).
- Textos da Navbar alterados para `white` (ou `whiteAlpha.800`) para legibilidade no fundo azul.
- Botão `ThemeToggle` na Navbar agora possui cor branca para contraste.
- Sidebar configurada para alternar entre `white` (Light) e `gray.900` (Dark) via props `_dark`.
- Removidas cores fixas que impediam a reatividade do tema.

## Regras de negócio
- Manter identidade visual azul na barra superior em ambos os temas.
- Garantir contraste adequado para acessibilidade.

## Observações
- Utilizado `whiteAlpha.100`/`whiteAlpha.200` para bordas e estados de hover na Navbar azul.
