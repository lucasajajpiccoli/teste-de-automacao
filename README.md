
# Teste de Automação - Desafio Web

Esse é o repositório do Teste de Automação, Desafio Web, para o processo seletivo para a vaga de Quality Engineer do Plard, Santander.


## Instalação

Após clonar o repositório, instale o projeto com npm

```bash
  git clone https://github.com/lucasajajpiccoli/teste-de-automacao.git
  cd teste-de-automacao
  npm install
```


## Rodando os testes

Para rodar os testes, escolha um dos seguintes comandos dependendo da disponibilidade do navegador chrome no ambiente de execução e de se deseja visualizar o navegador.

```bash
  npm run cy:chrome

  npm run cy:chrome:visible

  npm run cy:electron
  
  npm run cy:electron:visible
```


## Arquivos

### Funcionalidades

As funcionalidades em Gherkin se encontram no caminho

```bash
  ./cypress/e2e/features
```

### Step Definitions

As step definitions que implementam as funcionalidades em Node e Cypress se encontram no caminho

```bash
  ./cypress/e2e/step_definitions
```

### Relatório

Um relatório de execução dos testes foi gerado e o caminho para abri-lo se encontra em

```bash
  ./mochawesome-report
```
