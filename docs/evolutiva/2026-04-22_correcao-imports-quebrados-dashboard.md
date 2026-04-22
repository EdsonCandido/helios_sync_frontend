# Correção de Imports Quebrados no Dashboard

## Objetivo
Corrigir erro de compilação causado pela remoção acidental de imports do Chakra UI no arquivo `DashboardLayout.tsx`.

## Alterações
- Restaurados os imports de `Box, Flex, HStack, Heading, Icon, Text, VStack` do `@chakra-ui/react`.
- Verificada a integridade do arquivo após a restauração.

## Regras de negócio
- Manter a aplicação funcional e sem erros de lint/typescript.

## Observações
- O erro ocorreu durante a última refatoração de cores. A restauração dos componentes resolve a quebra da tela.
