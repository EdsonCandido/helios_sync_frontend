# 📌 Padrão de Commits

Este projeto adota um padrão de commits estruturado, **obrigatoriamente em português**, para manter clareza, rastreabilidade e organização do histórico.

---

## 🧱 Estrutura do Commit

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

---

## 🏷️ Tipos de Commit

Utilize um dos tipos abaixo:

- feat → Nova funcionalidade
- fix → Correção de bug
- refactor → Refatoração (sem alteração de comportamento)
- style → Ajustes de formatação (lint, indentação, etc)
- docs → Documentação
- test → Criação ou alteração de testes
- chore → Tarefas internas (configuração, build, etc)
- perf → Melhorias de performance
- ci → Alterações em pipelines / CI

---

## 📍 Escopo

Indica a área do sistema afetada:

Exemplos:
- auth
- api
- ui
- database
- config

---

## ✍️ Descrição

- Deve ser curta e objetiva
- Usar verbo no infinitivo
- Máximo recomendado: 72 caracteres
- Sempre em português

### Exemplos:
- feat(auth): adicionar autenticação com JWT
- fix(api): corrigir erro ao buscar usuário por id
- refactor(ui): melhorar organização dos componentes

---

## 🧾 Corpo do Commit

Utilize quando necessário para detalhar:

- O que foi feito
- Por que foi feito
- Impactos

Exemplo:

```
feat(auth): adicionar autenticação com JWT

Implementa geração e validação de tokens JWT.
Necessário para proteger rotas privadas da aplicação.
```

---

## 🔚 Rodapé (Opcional)

Utilizado para:

- Referenciar issues
- Breaking changes

Exemplos:

```
Closes #123
```

```
BREAKING CHANGE: altera estrutura de autenticação
```

---

## 🚫 Regras Importantes

- Não usar commits genéricos:
  - "ajustes"
  - "mudanças"
  - "update"

- Não misturar múltiplas mudanças em um único commit
- Não escrever em inglês

- Commits devem ser claros e descritivos
- Cada commit deve representar uma única responsabilidade

---

## ✅ Exemplos Válidos

```
feat(user): criar endpoint de cadastro de usuário
```

```
fix(database): corrigir relacionamento entre tabelas
```

```
docs(readme): atualizar instruções de instalação
```

---

## 🎯 Objetivo

Garantir:

- Histórico limpo e compreensível
- Facilidade de manutenção
- Melhor colaboração em equipe