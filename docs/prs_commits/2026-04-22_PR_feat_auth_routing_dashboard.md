# PR: Implementação de Autenticação, Roteamento e Dashboard

## Objetivo
Implementar o sistema de autenticação de usuários, gerenciamento de rotas protegidas e a estrutura inicial do Dashboard com layout persistente.

## Alterações
- Criação do `AuthContext` e hook `useAuth` para gerenciamento de estado global de autenticação.
- Configuração do `react-router-dom` com rotas públicas e protegidas via componente `ProtectedRoute`.
- Implementação da página de Dashboard e layout estruturado com `DashboardLayout` (Sidebar e Navbar).
- Integração do formulário de login com o sistema de autenticação.
- Refatoração do `ThemeToggle` para ser reutilizável em diferentes contextos.
- Adição de logs de evolução técnica na pasta `docs/evolutiva/`.

## Endpoints afetados (se houver)
- N/A (Autenticação simulada no frontend).

## Regras de negócio
- Somente usuários autenticados podem acessar a rota `/dashboard`.
- Usuários autenticados que tentarem acessar `/login` são redirecionados automaticamente para o dashboard.
- Logout limpa os dados da sessão no `localStorage`.

## Observações
- A estrutura de rotas utiliza o `createBrowserRouter` do React Router v7.
- O layout do dashboard é responsivo e suporta Dark/Light mode integradamente.
