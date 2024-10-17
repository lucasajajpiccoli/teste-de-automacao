# language: pt

Funcionalidade: Carrinho
  Como usuário do Automation Exercise na página "https://www.automationexercise.com/products" com login efetuado
  Lucas quer adicionar os produtos existentes desejados em quantidade disponível desejada ao carrinho
  Para que adquira esse pacote de produtos em uma única compra

Contexto:
  Dado que Lucas tem uma conta
  E o e-mail é "lucas123@test.com"
  E a senha é "senha_teste"
  E que somente os produtos de nome "Pure Cotton V-Neck T-Shirt" e "Pure Cotton Neon Green Tshirt" contêm "pure" em seu nome ou palavras chaves
  E ele acessou à página de login "https://www.automationexercise.com/login"
  E ele efetuou o login na página com as credenciais corretas
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele utilizou a ferramenta de busca preenchida com "pure"

Cenário: Inclusão ao carrinho por meio da página de busca de produtos
  Quando ele clica no botão "Add to cart" do produto "Pure Cotton V-Neck T-Shirt"
  Então uma mensagem "Your product has been added to cart." deve aparecer

Cenário: Inclusão ao carrinho de um segundo produto por meio da página de busca de produtos
  E ele clicou no botão "Add to cart" do produto "Pure Cotton V-Neck T-Shirt"
  E ele clicou no botão "Continue Shopping" da mensagem de sucesso de inclusão ao carrinho
  Quando ele clica no botão "Add to cart" do produto "Pure Cotton Neon Green Tshirt"
  Então uma mensagem "Your product has been added to cart." deve aparecer

Cenário: Inclusão ao carrinho de quantidade específica de um produto por meio da página do produto
  E ele clicou no botão "View Product" do produto "Pure Cotton V-Neck T-Shirt"
  E ele deixou o campo "Quantity" com "2"
  Quando ele clica no botão "Add to cart" das informações do produto
  Então uma mensagem "Your product has been added to cart." deve aparecer

Cenário: Inclusão ao carrinho de quantidade específica de um segundo produto por meio da página do produto
  E ele clicou no botão "Add to cart" do produto "Pure Cotton V-Neck T-Shirt"
  E ele clicou no botão "Continue Shopping" da mensagem de sucesso de inclusão ao carrinho
  E ele clicou no botão "View Product" do produto "Pure Cotton Neon Green Tshirt"
  E ele deixou o campo "Quantity" com "2"
  Quando ele clica no botão "Add to cart" das informações do produto
  Então uma mensagem "Your product has been added to cart." deve aparecer
