# language: pt

Funcionalidade: Login
  Como um usuário do Automation Exercise
  Lucas quer efetuar o login em "https://www.automationexercise.com/login"
  Para que tenha acesso à área autenticada da plataforma

Contexto:
  Dado que Lucas tem uma conta
  E o nome é "Lucas"
  E o e-mail é "lucas123@test.com"
  E a senha é "senha_teste"
  E ele acessou à página de login "https://www.automationexercise.com/login"

Cenário: Login com campos vazios
  E ele deixou o campo "Email Address" vazio
  E ele deixou o campo "Password" vazio
  Quando ele clica no botão "Login"
  Então uma mensagem de "Preencha este campo." deve aparecer

Cenário: Login com campo "Email Address" vazio
  E ele deixou o campo "Email Address" vazio
  E ele deixou o campo "Password" preenchido
  Quando ele clica no botão "Login"
  Então uma mensagem de "Preencha este campo." deve aparecer

Cenário: Login com campo "Password" vazio
  E ele deixou o campo "Email Address" preenchido com um endereço de formato válido
  E ele deixou o campo "Password" vazio
  Quando ele clica no botão "Login"
  Então uma mensagem de "Preencha este campo." deve aparecer

Cenário: Login com campo "Email Address" com endereço de formato inválido e "Password" vazio
  E ele deixou o campo "Email Address" preenchido com um endereço de formato inválido, com valor "teste"
  E ele deixou o campo "Password" vazio
  Quando ele clica no botão "Login"
  Então uma mensagem de "Inclua um '@' no endereço de email." deve aparecer

Cenário: Login com campo "Email Address" com endereço de formato inválido e "Password" preenchido
  E ele deixou o campo "Email Address" preenchido com um endereço de formato inválido, com valor "teste"
  E ele deixou o campo "Password" preenchido
  Quando ele clica no botão "Login"
  Então uma mensagem de "Inclua um '@' no endereço de email." deve aparecer

Cenário: Login com campo "Email Address" preenchido com o e-mail correto de Lucas e "Password" vazio
  E ele deixou o campo "Email Address" preenchido com "lucas123@test.com"
  E ele deixou o campo "Password" vazio
  Quando ele clica no botão "Login"
  Então uma mensagem de "Preencha este campo." deve aparecer

Cenário: Login com campo "Email Address" preenchido com o e-mail correto de Lucas e "Password" incorreta
  E ele deixou o campo "Email Address" preenchido com "lucas123@test.com"
  E ele deixou o campo "Password" preenchido com "senha_errada"
  Quando ele clica no botão "Login"
  Então uma mensagem de "Your email or password is incorrect!" deve aparecer

Cenário: Login com as credenciais corretas
  E ele deixou o campo "Email Address" preenchido com "lucas123@test.com"
  E ele deixou o campo "Password" preenchido com "senha_teste"
  Quando ele clica no botão "Login"
  Então deve ser redirecionado para "https://www.automationexercise.com/"
  E deve ter no canto superior direito da página escrito "Logged in as Lucas"
