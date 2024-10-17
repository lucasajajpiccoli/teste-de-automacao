import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('ele utilizou a ferramenta de busca preenchida com {string}', function(palavra) {
  cy.get('#search_product').type(palavra);
  cy.get('#submit_search').click();
});

Given('ele clicou no botão {string} do produto {string}', function(botao, produto) {
  cy.get('.features_items').find('.product-image-wrapper').contains(produto).parent().parent().parent().contains(botao).click();
});

Given('ele clicou no botão {string} da mensagem de sucesso de inclusão ao carrinho', function(botao) {
  cy.get('.features_items').contains(botao).click();
});

Given('ele deixou o campo {string} com {string}', function(campo, valor) {
  cy.get(`#${campo.toLowerCase()}`).clear().type(valor);
})

When('ele clica no botão {string} do produto {string}', function(botao, produto) {
  cy.get('.features_items').find('.product-image-wrapper').contains(produto).parent().contains(botao).click();
});

When('ele clica no botão {string} das informações do produto', function(botao) {
  cy.get('.product-information').contains(botao).click();
})

Then('uma mensagem {string} deve aparecer', function(mensagem) {
  cy.get('#cartModal').contains(mensagem).parent().parent().parent().parent().should('have.class', 'show');
});
