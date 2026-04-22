# Adição do Botão Sair na Sidebar

## Objetivo
Adicionar funcionalidade de logout e posicionar o botão "Sair" na parte inferior da Sidebar.

## Alterações
- Importado ícone `LuLogOut`.
- Implementada função `handleLogout` que redireciona para a raiz (`/`).
- Ajustada a estrutura da Sidebar para usar um `VStack` com `h="full"`.
- Adicionado botão "Sair" com cor `red.500` e estados de hover específicos para modo claro e escuro.

## Regras de negócio
- O botão de sair deve estar sempre visível na parte inferior da navegação lateral.
- Ao clicar, o usuário deve ser deslogado (redirecionado para o login).

## Observações
- Utilizado `flex={1}` no grupo superior de itens para empurrar o botão de sair para o final.
