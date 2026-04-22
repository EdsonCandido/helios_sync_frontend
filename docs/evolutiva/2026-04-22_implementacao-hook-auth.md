# Implementação de Hook de Autenticação

## Objetivo
Criar um hook (`useAuth`) e contexto (`AuthContext`) para gerenciar informações do usuário logado, permissões de módulos e token JWT, com persistência no `localStorage`.

## Alterações
- Criado `src/context/AuthContext.tsx`: Define o contexto, provedor e hook principal.
- Criado `src/hooks/useAuth.ts`: Atalho para exportar o hook e tipos.
- Criado `src/components/ProtectedRoute.tsx`: Componente para proteção de rotas.
- Atualizado `src/main.tsx`: Adicionado `AuthProvider` no root da aplicação.
- Atualizado `src/routes/index.tsx`: Rotas do dashboard agora são protegidas.

## Regras de negócio
- Informações persistidas: `username`, `email`, `token`, `modules`.
- Módulos disponíveis: `clientes`, `financeiro`, `arquivos`.
- Persistência automática no `localStorage` via chave `helios_auth_data`.
- Função `logout()` limpa o `localStorage` e o estado da aplicação.
- Proteção de Rotas: Acesso ao `/dashboard` e sub-rotas restrito a usuários com token válido.
- Redirecionamento Automático: Usuários logados são redirecionados do login para o dashboard.

## Observações
- Utiliza TypeScript com tipagem forte para os dados do usuário.
- O hook deve ser usado dentro de componentes descendentes do `AuthProvider`.
