import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('o preço do produto {string} é {string}', function (produto, valor) {
  this.produtos.push({ produto, valor })
});

Given('que o carrinho está vazio na página {string}', function (url) {
  cy.visit(url);
  cy.get('#cart_info').then(($cart) => {
    const $deleteButtons = $cart.find('.cart_quantity_delete');
    if ($deleteButtons.length > 0) {
      cy.wrap($deleteButtons).each(($deleteButton) => {
        cy.wrap($deleteButton).click();
      });
    }
  });
});

Given('ele adicionou o produto {string} diretamente da página de busca de produtos', function (produto) {
  cy.get('.features_items').find('.product-image-wrapper').contains(produto).parent().parent().parent().contains("Add to cart").click();
  cy.get('.features_items').contains("Continue Shopping").click();
});

Given('ele adicionou o produto em quantidade {string} por meio da página do produto', function(quantidade) {
  cy.get('#quantity').clear().type(quantidade);
  cy.get('.product-information').contains("Add to cart").click();
  cy.get('#cartModal').contains("Continue Shopping").click();
});

When('ele clica na opção {string} da página do carrinho', function (opcao) {
  cy.get('#cart_items').contains(opcao).click();
});

Then('deve ter escrito na página {string}', function (informacao) {
  cy.get('#cart_info').contains(informacao).should('exist');
});

Then('o produto {string} deve estar listado em quantidade {string}', function (produto, quantidade) {
  cy.get('#cart_info').contains(produto).parent().parent().parent().find('.cart_quantity button').first().then(($botao) => {
    cy.wrap($botao.text().trim()).should('equal', quantidade);
  });
});

Then('o preço total do produto {string} deve ser {string}', function (produto, preco_produto) {
  cy.get('#cart_info').contains(produto).parent().parent().parent().find('.cart_total p').first().then(($p) => {
    cy.wrap($p.text().trim()).should('equal', preco_produto);
  });
});

Then('o preço total do pedido deve ser {string}', function (preco_total) {
  cy.get('#cart_info').contains("Total Amount").parent().parent().parent().find('.cart_total_price').first().then(($p) => {
    cy.wrap($p.text().trim()).should('equal', preco_total);
  });
});
