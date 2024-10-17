# language: pt

Funcionalidade: Busca
  Como usuário do Automation Exercise na página "https://www.automationexercise.com/" com login efetuado
  Lucas quer procurar produtos com a ferramenta de busca da página
  Para que encontre os produtos existentes que deseja

Contexto:
  Dado que Lucas tem uma conta
  E o nome é "Lucas"
  E o e-mail é "lucas123@test.com"
  E a senha é "senha_teste"
  E a ferramenta de busca se encontra na página "https://www.automationexercise.com/products"
  E ele acessou à página de login "https://www.automationexercise.com/login"
  E ele efetuou o login na página com as credenciais corretas

Cenário: Acesso à página de produtos, onde se encontra a ferramenta de busca
  Quando ele clica na opção "Products" no menu superior
  Então deve ser redirecionado para "https://www.automationexercise.com/products"
  E deve ter no canto superior direito da página escrito "Logged in as Lucas"

# Busca com campo vazio não filtra
Cenário: Busca com campo vazio
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele deixou o campo de busca vazio
  Quando ele clica na lupa ao lado do campo de busca
  Então os produtos exibidos não devem ser alterados

Cenário: Busca por palavra que nenhum produto contém em seu nome ou palavras chaves
  Dado que nenhum produto tem a palavra "hot" em seu nome ou palavras chaves
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele deixou o campo de busca preenchido com "hot"
  Quando ele clica na lupa ao lado do campo de busca
  Então nenhum produto deve ser exibido

Cenário: Busca por palavra que apenas um produto contém em seu nome ou palavras chaves
  Dado que apenas o produto de nome "Winter Top" contém a palavra "winter" em seu nome ou palavras chaves
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele deixou o campo de busca preenchido com "winter"
  Quando ele clica na lupa ao lado do campo de busca
  Então apenas o produto de nome "Winter Top" deve ser exibido

Cenário: Busca por palavra que mais de um produto contêm em seu nome ou palavras chaves
  Dado que somente os produtos de nome "Pure Cotton V-Neck T-Shirt" e "Pure Cotton Neon Green Tshirt" contêm "pure" em seu nome ou palavras chaves
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele deixou o campo de busca preenchido com "pure"
  Quando ele clica na lupa ao lado do campo de busca
  Então apenas os produtos de nome "Pure Cotton V-Neck T-Shirt" e "Pure Cotton Neon Green Tshirt" devem ser exibidos
