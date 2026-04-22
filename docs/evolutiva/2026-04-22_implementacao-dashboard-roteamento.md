# Implementação de Dashboard e Roteamento

## Objetivo
Implementar sistema de rotas utilizando `react-router-dom` e criar a estrutura inicial do Dashboard com Navbar e Sidebar.

## Alterações
- Instalado `react-router-dom`.
- Criado arquivo de configuração de rotas em `src/routes/index.tsx`.
- Criado componente `DashboardLayout` com:
    - Navbar: Logo (esquerda) e Nome do usuário (direita).
    - Sidebar: Módulos de Clientes, Financeiro e Arquivos.
- Criada página base `Dashboard.tsx`.
- Atualizado `App.tsx` para usar `RouterProvider`.
- Atualizado `LoginForm.tsx` para redirecionar após sucesso.

## Regras de negócio
- Somente usuário `teste@helios.com` com senha `teste` acessa o dashboard (mock).
- Sidebar contém links para módulos específicos.

## Observações
- Utilizado `react-router-dom` v6+ (Data APIs).
- Componentes do Chakra UI v3 utilizados para layout.
- Estrutura preparada para rotas protegidas futuras.
