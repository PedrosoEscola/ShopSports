// recupera o objeto armazenado no localStorage e converte de volta para um objeto
const produtoSelecionado = JSON.parse(
  localStorage.getItem('produtoSelecionado')
)

console.log(produtoSelecionado) // mostra o objeto do produto no console

const imgProd = document.querySelector('.imagemdoprod')
const nameProd = document.querySelector('.titulo')
const descriProd = document.querySelector('.descriprod')
const precoProd = document.querySelector('.preco')

imgProd.src = produtoSelecionado.image
nameProd.innerHTML = produtoSelecionado.name
precoProd.innerHTML = produtoSelecionado.price
