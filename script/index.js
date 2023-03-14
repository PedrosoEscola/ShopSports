const sectionCardsNovidades = document.querySelector('#produtos')

const cardNovidades = document.querySelector('.card')

const novidades = [
  {
    name: 'Camiseta Argentina I',
    price: 'R$ 219,99',
    image: '/ShopSports/images/argentina1.png',
    id: '13',
    novidade: true
  },
  {
    name: 'Camiseta Argentina II',
    price: 'R$ 219,99',
    image: '/ShopSports/images/argentina2.jpeg',
    id: '14',
    novidade: true
  },
  {
    name: 'Camiseta Brasil I',
    price: 'R$ 239,99',
    image: '/ShopSports/images/brasil1.jpeg',
    id: '15',
    novidade: true
  },
  {
    name: 'Camiseta Brasil II',
    price: 'R$ 239,99',
    image: '/ShopSports/images/brasil2.png',
    id: '16',
    novidade: true
  }
]

novidades.map(prodnovidade => {
  const cardClone = cardNovidades.cloneNode(true)
  cardClone.querySelector('.imagecard').src = prodnovidade.image
  cardClone.querySelector('.texto h3').innerHTML = prodnovidade.name
  cardClone.querySelector('.texto p').innerHTML = prodnovidade.price
  sectionCardsNovidades.appendChild(cardClone)

  // adiciona event listener de clique em cada cartão clonado
  cardClone.addEventListener('click', () => {
    const nomeDoProduto = cardClone.querySelector('.texto h3').innerHTML
    const produtoSelecionado = novidades.find(
      prod => prod.name === nomeDoProduto
    ) // encontra o objeto do produto com base no nome

    // converte o objeto para uma string JSON e armazena no localStorage
    localStorage.setItem(
      'produtoSelecionado',
      JSON.stringify(produtoSelecionado)
    )
  })
})

//-----Celebridades-----//
const sectioncelebrities = document.querySelector('#colaboradores')

const cardcelebritie = document.querySelector('.cardfamoso')

const colaboradores = [
  {
    name: 'Gabriel Medina',
    image: '/ShopSports/images/medina.jpeg'
  },
  {
    name: 'Cristiano Ronaldo',
    image: '/ShopSports/images/cristiano.png'
  },
  {
    name: 'Sheilla Castro',
    image: '/ShopSports/images/sheilla.jpeg'
  }
]

colaboradores.map(famoso => {
  const cardCloneFamoso = cardcelebritie.cloneNode(true)
  cardCloneFamoso.querySelector('.ima').src = famoso.image
  cardCloneFamoso.querySelector('.lebron').innerHTML = famoso.name
  sectioncelebrities.appendChild(cardCloneFamoso)
})
