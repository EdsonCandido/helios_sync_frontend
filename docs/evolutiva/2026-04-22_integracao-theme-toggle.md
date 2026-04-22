# Integração do Theme Toggle

## Objetivo
Tornar o componente `ThemeToggle` flexível para ser utilizado tanto de forma fixa (Login) quanto integrada em layouts (Dashboard).

## Alterações
- Removido posicionamento fixo (`position="fixed"`) nativo do componente `ThemeToggle`.
- Adicionado suporte a `IconButtonProps` no `ThemeToggle` para permitir customização via props.
- Atualizada página de `Login.tsx` para passar posicionamento fixo via props.
- Atualizado `DashboardLayout.tsx` para integrar o toggle na Navbar com tamanho reduzido (`size="sm"`).

## Regras de negócio
- Componente deve ser reutilizável em qualquer parte da aplicação.
- Preservar o comportamento de alternância de tema global.

## Observações
- O uso de `boxShadow="none"` no Dashboard garante uma integração visual mais limpa com a Navbar.
