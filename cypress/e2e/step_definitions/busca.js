import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('a ferramenta de busca se encontra na página {string}', function (url) {
  this.busca_url = url;
});

Given('ele deixou o campo de busca vazio', function () {
  cy.get('#search_product').clear();
});

Given('ele deixou o campo de busca preenchido com {string}', function (palavra) {
  cy.get('#search_product').type(palavra);
});

Given('que nenhum produto tem a palavra {string} em seu nome ou palavras chaves', function (palavra) {
  this.mapa_palavra_produtos = {
    palavra: palavra,
    produtos: []
  }
});

Given('que apenas o produto de nome {string} contém a palavra {string} em seu nome ou palavras chaves', function (produto, palavra) {
  this.mapa_palavra_produtos = {
    palavra: palavra,
    produtos: [produto]
  }
});

Given('que somente os produtos de nome {string} e {string} contêm {string} em seu nome ou palavras chaves', function (
  produto_1, produto_2, palavra) {
  this.mapa_palavra_produtos = {
    palavra: palavra,
    produtos: [produto_1, produto_2]
  }
}
);

When('ele clica na lupa ao lado do campo de busca', function () {
  const produtos_anteriores = [];

  cy.get('.features_items').find('.product-image-wrapper').each(($wrapper) => {
    produtos_anteriores.push($wrapper.find('p').first().text());
  });

  this.produtos_anteriores = produtos_anteriores;

  cy.get('#submit_search').click();
});

Then('os produtos exibidos não devem ser alterados', function () {
  const { produtos_anteriores } = this;

  cy.get('.features_items').find('.product-image-wrapper').each(($wrapper, indice) => {
    const produto_atualizado = $wrapper.find('p').first().text();
    cy.wrap(produto_atualizado).should('equal', produtos_anteriores[indice]);
  });
});

Then('nenhum produto deve ser exibido', function () {
  cy.wait(2000);
  cy.get('.features_items').find('.product-image-wrapper').should('have.length', 0);
});

Then('apenas o produto de nome {string} deve ser exibido', function (produto) {
  cy.wait(2000);
  cy.get('.features_items').find('.product-image-wrapper').should('have.length', 1);
  cy.get('.features_items').find('.product-image-wrapper').first().then(($wrapper) => {
    cy.wrap($wrapper.find('p').first().text().trim()).should('equal', produto);
  });
});

Then('apenas os produtos de nome {string} e {string} devem ser exibidos', function (produto_1, produto_2) {
  cy.get('.features_items').find('.product-image-wrapper').should('have.length', 2);
  cy.get('.features_items').find('.product-image-wrapper').contains(produto_1).should('exist');
  cy.get('.features_items').find('.product-image-wrapper').contains(produto_2).should('exist');
});
