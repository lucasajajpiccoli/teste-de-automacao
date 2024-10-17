import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que Lucas tem uma conta', function () {
  this.conta = {};
  this.login = {};
  this.login.campos_vazios = [];
  this.login.campos_invalidos = [];
  this.login.campos_validos = [];
  this.login.campos_corretos = [];
  this.produtos = [];
});

Given('o nome é {string}', function (nome) {
  this.conta.nome = nome;
});

Given('o e-mail é {string}', function (email) {
  this.conta.email = email;
});

Given('a senha é {string}', function (senha) {
  this.conta.senha = senha;
});

Given('ele acessou à página de login {string}', function (url) {
  cy.visit(url);
});

Given('ele efetuou o login na página com as credenciais corretas', function() {
  cy.get(`input[data-qa="${mapa_elemento_atributo[email_campo]}"]`).type(this.conta.email);
  cy.get(`input[data-qa="${mapa_elemento_atributo[senha_campo]}"]`).type(this.conta.senha);
  cy.get(`button[data-qa="${mapa_elemento_atributo["Login"]}"]`).click();
});

Given('ele acessou à página {string}', function(url) {
  cy.visit(url);
});

Given('ele clicou na opção {string} no menu superior', function(opcao) {
  cy.get('.navbar-nav').contains(opcao).click();
});

When('ele clica na opção {string} no menu superior', function(opcao) {
  cy.get('.navbar-nav').contains(opcao).click();
});

Then('deve ser redirecionado para {string}', function(url) {
  cy.url().should('equal', url);
});

const mapa_elemento_atributo = {
  "Email Address": "login-email",
  "Password": "login-password",
  "Login": "login-button"
}

const email_campo = "Email Address";
const senha_campo = "Password";

export {
  mapa_elemento_atributo,
  email_campo,
  senha_campo
};
