# language: pt

Funcionalidade: Validação
  Como usuário do Automation Exercise na página "https://www.automationexercise.com/products" com login efetuado
  Lucas quer validar se os produtos adicionados ao carrinho constam da tela de Checkout nas quantidades e preços esperados
  Para que adquira esse pacote de produtos em uma única compra de forma acurada

Contexto:
  Dado que Lucas tem uma conta
  E o e-mail é "lucas123@test.com"
  E a senha é "senha_teste"
  E que somente os produtos de nome "Pure Cotton V-Neck T-Shirt" e "Pure Cotton Neon Green Tshirt" contêm "pure" em seu nome ou palavras chaves
  E o preço do produto "Pure Cotton V-Neck T-Shirt" é "Rs. 1299"
  E o preço do produto "Pure Cotton Neon Green Tshirt" é "Rs. 850"
  E ele acessou à página de login "https://www.automationexercise.com/login"
  E ele efetuou o login na página com as credenciais corretas
  E que o carrinho está vazio na página "https://www.automationexercise.com/view_cart"
  E ele acessou à página "https://www.automationexercise.com/products"
  E ele utilizou a ferramenta de busca preenchida com "pure"

Cenário: Sem inclusão de produto ao carrinho
  Quando ele clica na opção "Cart" no menu superior
  Então deve ser redirecionado para "https://www.automationexercise.com/view_cart"
  E deve ter escrito na página "Cart is empty!"

Cenário: Inclusão ao carrinho de um produto por meio da página de busca de produtos
  E ele adicionou o produto "Pure Cotton V-Neck T-Shirt" diretamente da página de busca de produtos
  E ele clicou na opção "Cart" no menu superior
  Quando ele clica na opção "Proceed To Checkout" da página do carrinho
  Então o produto "Pure Cotton V-Neck T-Shirt" deve estar listado em quantidade "1"
  E o preço total do produto "Pure Cotton V-Neck T-Shirt" deve ser "Rs. 1299"
  E o preço total do pedido deve ser "Rs. 1299"

Cenário: Inclusão ao carrinho de mais de um produto por meio da página de busca de produtos
  E ele adicionou o produto "Pure Cotton V-Neck T-Shirt" diretamente da página de busca de produtos
  E ele adicionou o produto "Pure Cotton Neon Green Tshirt" diretamente da página de busca de produtos
  E ele clicou na opção "Cart" no menu superior
  Quando ele clica na opção "Proceed To Checkout" da página do carrinho
  Então o produto "Pure Cotton V-Neck T-Shirt" deve estar listado em quantidade "1"
  E o preço total do produto "Pure Cotton V-Neck T-Shirt" deve ser "Rs. 1299"
  E o produto "Pure Cotton Neon Green Tshirt" deve estar listado em quantidade "1"
  E o preço total do produto "Pure Cotton Neon Green Tshirt" deve ser "Rs. 850"
  E o preço total do pedido deve ser "Rs. 2149"

Cenário: Inclusão ao carrinho de quantidade específica de um produto por meio da página do produto
  E ele clicou no botão "View Product" do produto "Pure Cotton V-Neck T-Shirt"
  E ele adicionou o produto em quantidade "2" por meio da página do produto
  E ele clicou na opção "Cart" no menu superior
  Quando ele clica na opção "Proceed To Checkout" da página do carrinho
  Então o produto "Pure Cotton V-Neck T-Shirt" deve estar listado em quantidade "2"
  E o preço total do produto "Pure Cotton V-Neck T-Shirt" deve ser "Rs. 2598"
  E o preço total do pedido deve ser "Rs. 2598"

Cenário: Inclusão ao carrinho de quantidade específica de um segundo produto por meio da página do produto
  E ele adicionou o produto "Pure Cotton V-Neck T-Shirt" diretamente da página de busca de produtos
  E ele clicou no botão "View Product" do produto "Pure Cotton Neon Green Tshirt"
  E ele adicionou o produto em quantidade "2" por meio da página do produto
  E ele clicou na opção "Cart" no menu superior
  Quando ele clica na opção "Proceed To Checkout" da página do carrinho
  Então o produto "Pure Cotton V-Neck T-Shirt" deve estar listado em quantidade "1"
  E o preço total do produto "Pure Cotton V-Neck T-Shirt" deve ser "Rs. 1299"
  E o produto "Pure Cotton Neon Green Tshirt" deve estar listado em quantidade "2"
  E o preço total do produto "Pure Cotton Neon Green Tshirt" deve ser "Rs. 1700"
  E o preço total do pedido deve ser "Rs. 2999"
