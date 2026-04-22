# 🧩 Pull Request

## 📌 Descrição

<!-- Explique de forma clara o que foi feito -->

- Adição de configuração Docker para ambiente de produção.
- Configuração do servidor Nginx para servir o build estático e lidar com rotas SPA.
- Script de automação para build e execução do container.
- Correção de erro de tipagem no componente `DashboardLayout`.

## 🎯 Tipo de mudança

<!-- Marque com um "x" -->

- [ ] 🐛 Bugfix
- [x] ✨ Feature
- [ ] ♻️ Refactor
- [ ] ⚡ Performance
- [ ] 🧪 Testes
- [ ] 📝 Documentação
- [x] 🔧 Chore (configuração, build, etc)

## 🧠 Contexto

<!-- Por que essa mudança é necessária? -->

- O projeto precisava de uma forma padronizada de ser distribuído e executado em produção via Docker.
- Erros de compilação no TypeScript estavam impedindo o build de produção.

## 🔗 Issue relacionada
<!-- Pergunte se tem alguma issue realcionada a esses commits -->
<!-- Ex: Closes #123 -->

-

## 🧪 Como testar

<!-- Passo a passo para validar -->

1. Execute o script `./start_docker.sh` na raiz do projeto.
2. Aguarde o build da imagem e a inicialização do container.
3. Acesse `http://localhost:81` no navegador.
4. Verifique se o login e a navegação no dashboard funcionam corretamente (especialmente o refresh da página em rotas internas).

## ✅ Checklist

<!-- Antes de pedir review -->

- [x] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [x] Build está passando
- [x] Não quebrei nada existente (ou documentei o impacto)
- [x] Documentação foi atualizada (se necessário)

## ⚠️ Pontos de atenção

<!-- Algo que o reviewer precisa focar -->

- A porta padrão exposta pelo script é a 81 para evitar conflitos comuns com a porta 80.

## 🚀 Impacto

<!-- Impacto geral da mudança -->

- [ ] Nenhum impacto relevante
- [ ] Impacto baixo
- [x] Impacto médio
- [ ] Impacto alto

## 🧩 Notas adicionais

## <!-- Qualquer coisa extra -->
