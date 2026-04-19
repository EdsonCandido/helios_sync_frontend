# 🧠 AGENTS.md — Diretrizes do Projeto

## 📌 Visão Geral

Este projeto consiste em uma aplicação web com arquitetura **SPA (Single Page Application)** e backend **RESTful**, com autenticação baseada em JWT e persistência em banco relacional.

### Stack principal

* Frontend: React + Vite + TypeScript
* UI: Chakra UI
* Backend: Spring Boot (Java 22)
* Banco de Dados: PostgreSQL
* Autenticação: JWT (stateless)
* Identificadores: UUID
* Auditoria: Automática (createdAt, updatedAt, createdBy, updatedBy, active)

---

## 🏗️ Arquitetura

### Frontend

Estrutura base:

```id="azzuv5"
src/
 ├── app/
 ├── pages/
 ├── components/
 ├── services/
 ├── hooks/
 ├── context/
 ├── routes/
 └── utils/
```

### Regras obrigatórias

* ✅ Todo código deve ser escrito em **TypeScript**
* ❌ Não utilizar arquivos `.js` (apenas `.ts` / `.tsx`)
* Tipagem explícita para:

  * Props de componentes
  * Respostas de API
  * Estados e hooks

Responsabilidades:

* Gerenciar autenticação (JWT)
* Consumo de API
* Controle de rotas protegidas
* Gerenciamento de tema (dark/light)
* Validação de formulários

---

### Backend

Arquitetura em camadas:

```id="74qm8f"
controller/
service/
repository/
domain/
dto/
security/
config/
```

Responsabilidades:

* Regras de negócio
* Segurança (JWT)
* Persistência
* Auditoria
* Validação

---

## 🔐 Autenticação e Segurança

### Estratégia

* Stateless
* JWT obrigatório em todas requisições autenticadas
* Sem uso de sessão

### Header padrão

```id="0s32ei"
Authorization: Bearer <token>
```

### Regras

* Token deve conter `userId` no `sub`
* Backend deve validar assinatura e expiração
* Frontend deve interceptar erros 401

---

## 🧬 Padrão de Entidades

Todas as entidades DEVEM:

* Usar UUID como ID
* Herdar de `BaseEntity`
* Possuir auditoria completa

### Campos obrigatórios

| Campo     | Tipo     |
| --------- | -------- |
| id        | UUID     |
| active    | Boolean  |
| createdAt | DateTime |
| updatedAt | DateTime |
| createdBy | UUID     |
| updatedBy | UUID     |

### Regras

* ❌ Não usar delete físico
* ✅ Usar soft delete (`active = false`)
* ✅ Queries devem filtrar apenas `active = true`

---

## 📦 Convenções de Código

### Backend

* DTO != Entity (nunca expor entidade diretamente)
* Usar `record` para DTOs
* Controllers devem ser finos (sem regra de negócio)
* Services concentram regras
* Repository apenas acesso a dados

### Nomes

* Controller: `ClienteController`
* Service: `ClienteService`
* Repository: `ClienteRepository`
* DTO: `ClienteDTO`

---

### Frontend

* Componentes pequenos e reutilizáveis
* Separar lógica (hooks) de UI
* Centralizar chamadas HTTP em `/services`
* Evitar lógica de negócio em componentes
* Tipagem forte em toda a aplicação

---

## 🧹 Lint e Formatação

### Ferramenta oficial

* Utilizar obrigatoriamente: Biome

### Regras

* Biome substitui:

  * ESLint
  * Prettier

* Código deve estar sempre:

  * Formatado
  * Sem erros de lint

### Scripts obrigatórios

```json id="biome-scripts"
{
  "scripts": {
    "lint": "biome check .",
    "format": "biome format ."
  }
}
```

### Boas práticas

* Rodar lint antes de commits
* Integrar com pre-commit (husky recomendado)
* Não commitar código fora do padrão

---

## 📝 Documentação obrigatória (/docs)

### Regra geral

* ✅ **Toda interação (feature, bugfix, refactor)** DEVE gerar documentação
* 📁 A documentação deve ser salva na pasta `/docs`
* 📁 Caso a pasta não exista, ela DEVE ser criada

---

### Organização

Estrutura recomendada:

```id="docs-structure"
docs/
 ├── auth/
 ├── clientes/
 ├── setup/
 └── nome-da-tarefa/
```

---

### Nome dos arquivos

Padrão:

```id="docs-naming"
YYYY-MM-DD_nome-da-tarefa.md
```

Exemplo:

```id="docs-example"
2026-04-18_criacao-endpoint-clientes.md
```

---

### Conteúdo mínimo obrigatório

Cada documento deve conter:

```md id="docs-template"
# Nome da tarefa

## Objetivo
Descrever o que foi feito

## Alterações
- Lista de mudanças realizadas

## Endpoints afetados (se houver)
- GET /clientes
- POST /clientes

## Regras de negócio
- Descrever regras implementadas

## Observações
- Pontos importantes / decisões técnicas
```

---

### Regras

* ❌ Não finalizar tarefa sem documentação
* ❌ Não deixar mudanças sem rastreabilidade
* ✅ Documentação deve permitir entendimento futuro sem depender de contexto externo
* ✅ **Pull Requests**: Cada PR realizado DEVE ter um arquivo correspondente criado dentro da pasta `/docs`.
* ✅ **Commits**: Todos os commits DEVEM seguir estritamente as regras descritas no arquivo `padrao-commits.md` (cópia disponível em `/docs/padrao-commits.md`).

---

## 🎨 UI/UX (Chakra UI)

### Regras

* Aplicação DEVE suportar modo escuro (dark mode)
* Utilizar tokens de tema (não hardcode de cores)
* Usar componentes padrão do Chakra

### Boas práticas

* Feedback visual (toast, loading)
* Inputs com validação
* Layout responsivo

---

## 🌙 Dark Mode

* Deve funcionar por padrão com preferência do sistema
* Deve haver toggle manual
* Persistência da escolha do usuário (localStorage)

---

## 🔁 Fluxo de Dados

### Login

1. Usuário envia email/senha
2. Backend valida
3. Retorna JWT
4. Front armazena token

### Requisições autenticadas

1. Front envia JWT
2. Backend valida
3. Injeta usuário no contexto
4. Auditoria usa `createdBy/updatedBy`

---

## 🧪 Validação

### Backend

* Campos obrigatórios via Bean Validation
* CPF/CNPJ válido (se informado)

### Frontend

* Validação antes do submit
* Mensagens claras ao usuário

---

## 🚫 Anti-patterns (proibido)

* ❌ Usar ID incremental
* ❌ Expor entidade diretamente na API
* ❌ Deletar registros fisicamente
* ❌ Hardcode de cores (quebra dark mode)
* ❌ Lógica de negócio no controller
* ❌ Uso de JavaScript puro no frontend (sem TypeScript)
* ❌ Não utilizar Biome
* ❌ Não documentar alterações

---

## ⚙️ Boas práticas obrigatórias

* Logging estruturado
* Tratamento global de exceções
* Versionamento de API (`/api/v1`)
* Separação clara de camadas
* Código limpo e legível

---

## 📈 Evolução futura (guideline)

Preparado para:

* RBAC (roles/permissões)
* Multi-tenant
* Refresh token
* Auditoria avançada (histórico)
* Integração com provedores externos (ex: Keycloak)

---

## 🧭 Princípios do Projeto

* Simplicidade primeiro
* Clareza > abstração desnecessária
* Consistência > preferência pessoal
* Segurança desde o início
* Escalabilidade planejada, não improvisada

---

## 📌 Observação Final

Qualquer decisão fora deste padrão deve ser:

1. Justificada tecnicamente
2. Documentada
3. Validada antes da implementação

---
