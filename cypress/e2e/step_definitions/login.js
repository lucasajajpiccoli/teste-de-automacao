import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import { mapa_elemento_atributo, email_campo, senha_campo } from "./comum";

const mapa_portugues_ingles = {
  "Preencha este campo.": "Please fill out this field.",
  "Inclua um '@' no endereço de email.": "Please include an '@' in the email address.",
  "Your email or password is incorrect!": "Your email or password is incorrect!"
}

const dados_incorretos = {
  invalido: "1a2b3c",
  valido: "a@b.c"
}

Given('ele deixou o campo de login {string} vazio', function (campo) {
  this.login.campos_vazios.push(campo);
  cy.get(`input[data-qa="${mapa_elemento_atributo[campo]}"]`).clear();
});

Given('ele deixou o campo de login {string} preenchido', function (campo) {
  this.login.campos_invalidos.push(campo);
  cy.get(`input[data-qa="${mapa_elemento_atributo[campo]}"]`).type(dados_incorretos.invalido);
});

Given('ele deixou o campo de login {string} preenchido com um endereço de formato inválido, com valor {string}', function (campo, valor) {
  this.login.campos_invalidos.push(campo);
  cy.get(`input[data-qa="${mapa_elemento_atributo[campo]}"]`).type(valor);
});

Given('ele deixou o campo de login {string} preenchido com um endereço de formato válido', function (campo) {
  this.login.campos_validos.push(campo);
  cy.get(`input[data-qa="${mapa_elemento_atributo[campo]}"]`).type(dados_incorretos.valido);
});

Given('ele deixou o campo de login {string} preenchido com {string}', function (campo, valor) {
  const email_correto = campo === email_campo && valor === this.conta.email;
  const senha_correta = campo === senha_campo && valor === this.conta.senha;

  if (email_correto || senha_correta) {
    this.login.campos_corretos.push(campo);
  } else {
    this.login.campos_invalidos.push(campo);
  }

  cy.get(`input[data-qa="${mapa_elemento_atributo[campo]}"]`).type(valor);
});

When('ele clica no botão {string}', function (botao) {
  cy.get(`button[data-qa="${mapa_elemento_atributo[botao]}"]`).click();
});

Then("uma mensagem de {string} deve aparecer", function (mensagem) {
  const { campos_vazios, campos_invalidos, campos_validos, campos_corretos } = this.login;

  const ambos_vazios = campos_vazios.length === 2;
  const ambos_invalidos = campos_invalidos.length === 2;

  const somente_email_vazio = campos_vazios.length === 1 && campos_vazios[0] === email_campo;
  const somente_senha_vazia = campos_vazios.length === 1 && campos_vazios[0] === senha_campo;

  const somente_email_invalido = campos_invalidos.length === 1 && campos_invalidos[0] === email_campo;
  const somente_senha_invalida = campos_invalidos.length === 1 && campos_invalidos[0] === senha_campo;

  const somente_email_valido = campos_validos.length === 1 && campos_validos[0] === email_campo;

  const somente_email_correto = campos_corretos.length === 1 && campos_corretos[0] === email_campo;


  const email_invalido_senha_vazia = somente_email_invalido && somente_senha_vazia;

  const email_valido_senha_vazia = somente_email_valido && somente_senha_vazia;
    
  const email_correto_senha_vazia = somente_email_correto && somente_senha_vazia;

  const email_correto_senha_invalida = somente_email_correto && somente_senha_invalida;

  if (ambos_vazios || somente_email_vazio || email_invalido_senha_vazia || ambos_invalidos) {
    cy.get(`input[data-qa="${mapa_elemento_atributo[email_campo]}"]:invalid`)
      .invoke('prop', 'validationMessage')
      .should('have.string', mapa_portugues_ingles[mensagem]);
  } else if (email_valido_senha_vazia || email_correto_senha_vazia) {
    cy.get(`input[data-qa="${mapa_elemento_atributo[senha_campo]}"]:invalid`)
      .invoke('prop', 'validationMessage')
      .should('have.string', mapa_portugues_ingles[mensagem]);
  } else if (email_correto_senha_invalida) {
      cy.get(`form[action="/login"] > p`, { timeout: 10000 }).should('exist');
  }
});

Then('deve ter no canto superior direito da página escrito {string}', function(informacao_login) {
  cy.get('.fa-user').parent().then(($a) => {
    cy.wrap($a[0].textContent.trim()).should('equal', informacao_login);
  });
});
