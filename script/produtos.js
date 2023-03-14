function goback() {
  window.history.back()
}

//-----Produtos----//
const produtos = [
  {
    name: 'Prancha Rusty',
    price: 'R$ 3.380,00',
    image: '/images/prancha-rusty.png',
    id: '12'
  },
  {
    name: 'Prancha All Merrick',
    price: 'R$ 4.688,00',
    image: '/images/prancha-al-merrick.png',
    id: '1'
  },
  {
    name: 'Prancha Lost',
    price: 'R$ 2.975,00',
    image: '/images/prancha-lost.png',
    id: '2'
  },
  {
    name: 'Prancha Softboard',
    price: 'R$ 700,00',
    image: '/images/prancha-softboard.png',
    id: '3'
  },
  {
    name: 'Bola Futebol Copa do mundo 2022',
    price: 'R$ 199,90',
    image: '/images/bolacatar.png',
    id: '4'
  },
  {
    name: 'Bola Volei Mikasa',
    price: 'R$ 99,90',
    image: '/images/bolavolei.png',
    id: '5'
  },
  {
    name: 'Bola Basquete NBA',
    price: 'R$ 210,00',
    image: '/images/bolabasquete.png',
    id: '6'
  },

  {
    name: 'Tênis Esportivo Casual',
    price: 'R$ 229,90',
    image: '/images/teniscasual.jpeg',
    id: '7'
  },
  {
    name: 'Tênis Nike Revolution',
    price: 'R$ 259,90',
    image: '/images/tenis-nike-revolution.jpeg',
    id: '8'
  },
  {
    name: 'Tênis de Corrida',
    price: 'R$ 150,00',
    image: '/images/teniscorrida.jpeg',
    id: '9'
  },
  {
    name: 'Camiseta Corinthians',
    price: 'R$ 240,00',
    image: '/images/camisa2.jpeg',
    id: '10'
  },
  {
    name: 'Camiseta Santos',
    price: 'R$ 240,00',
    image: '/images/camisa1.jpeg',
    id: '11'
  }
]
const sectionCardsProdutos = document.querySelector('#produtos')

const cardProdutos = document.querySelector('.card')

produtos.map(prod => {
  const cardCloneProd = cardProdutos.cloneNode(true)
  cardCloneProd.querySelector('.imagecard').src = prod.image
  cardCloneProd.querySelector('.texto h3').innerHTML = prod.name
  cardCloneProd.querySelector('.texto p').innerHTML = prod.price
  sectionCardsProdutos.appendChild(cardCloneProd)

  // adiciona event listener de clique em cada cartão clonado
  cardCloneProd.addEventListener('click', () => {
    const nomeDoProduto = cardCloneProd.querySelector('.texto h3').innerHTML

    const produtoSelecionado = produtos.find(
      prod => prod.name === nomeDoProduto
    ) // encontra o objeto do produto com base no nome

    // converte o objeto para uma string JSON e armazena no localStorage
    localStorage.setItem(
      'produtoSelecionado',
      JSON.stringify(produtoSelecionado)
    )
  })
})
//-------------------------------------------------------------------//
