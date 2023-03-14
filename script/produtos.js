//-----Produtos----//
const produtos = [
  {
    name: 'Prancha Rusty',
    price: 'R$ 3.380,00',
    image: '/ShopSports/images/prancha-rusty.png',
    id: '12',
    descri:
      'A prancha Rusty Smoothie é a evolução da Piranha e foi criada para funcionar muito bem em ondas pequenas mas também faz bonito em ondas maiores.'
  },
  {
    name: 'Prancha All Merrick',
    price: 'R$ 4.688,00',
    image: '/ShopSports/images/prancha-al-merrick.png',
    id: '1',
    descri:
      'A prancha Al Merrick Fish Beard mistura a performance e funcionalidade da Neck Beard mas com a diversão e fluidez das biquilhas tradicionais!'
  },
  {
    name: 'Prancha Lost',
    price: 'R$ 2.975,00',
    image: '/ShopSports/images/prancha-lost.png',
    id: '2',
    descri:
      'A Lost é uma prancha que virou um ícone e revolucionou o Surf voltou muito parecida, mas com pequenos ajustes que Matt Biolos aprendeu ao longo desses mais de 10 anos para deixa-la ainda melhor proporcionar uma performance ainda melhor.'
  },
  {
    name: 'Prancha Softboard',
    price: 'R$ 700,00',
    image: '/ShopSports/images/prancha-softboard.png',
    id: '3',
    descri:
      'A prancha de surf Softboard Maré é uma verdadeira fun, porém feita com material macio, que evita machucados.'
  },
  {
    name: 'Bola Futebol Copa do mundo 2022',
    price: 'R$ 155,90',
    image: '/ShopSports/images/bolacatar.png',
    id: '4',
    descri:
      'O Futebol de greve da liga Premium está pronto todos os dias, com gráficos de alto contraste para ajudá-lo a rastreá-lo e o Design de 26 canais para voo muito preciso.'
  },
  {
    name: 'Bola Volei Mikasa',
    price: 'R$ 99,90',
    image: '/ShopSports/images/bolavolei.png',
    id: '5',
    descri:
      'Bola oficial de vôlei aprovada pela fivb federação internacional de voleibol'
  },
  {
    name: 'Bola Basquete NBA',
    price: 'R$ 210,00',
    image: '/ShopSports/images/bolabasquete.png',
    id: '6',
    descri:
      'Oficial da NBA: Wilson é o basquete oficial da NBA. Esta bola apresenta a marca oficial da NBA juntamente com o icônico script Wilson'
  },

  {
    name: 'Tênis Esportivo Casual',
    price: 'R$ 229,90',
    image: '/ShopSports/images/teniscasual.jpeg',
    id: '7',
    descri:
      'O  modelo esportivo masculino e feminino de linha premium, para homens e mulheres que amam estilo e conforto. Perfeito para a prática de esportes como corrida, academia, crossfit e também para o dia-a-dia.'
  },
  {
    name: 'Tênis Nike Revolution',
    price: 'R$ 259,90',
    image: '/ShopSports/images/tenis-nike-revolution.jpeg',
    id: '8',
    descri:
      'Sabemos que o conforto é a chave para uma corrida bem-sucedida, então adicionamos amortecimento e flexibilidade para uma passada mais macia.'
  },
  {
    name: 'Tênis de Corrida',
    price: 'R$ 150,00',
    image: '/ShopSports/images/teniscorrida.jpeg',
    id: '9',
    descri:
      'Esse tênis dá continuidade à nossa jornada pela sustentabilidade em um design feito com pelo menos 20% de conteúdo reciclado por peso.'
  },
  {
    name: 'Camiseta Corinthians',
    price: 'R$ 240,00',
    image: '/ShopSports/images/camisa2.jpeg',
    id: '10',
    descri:
      'Como outras da nossa coleção Stadium, ela combina detalhes da camisa profissional com tecnologia antissuor para oferecer um look pronto para o jogo e inspirado no seu time favorito.'
  },
  {
    name: 'Camiseta Santos',
    price: 'R$ 240,00',
    image: '/ShopSports/images/camisa1.jpeg',
    id: '11',
    descri:
      'Confeccionada em poliéster, a camisa Oficial 1 2021 é leve, respirável e resistente para você vestir nos jogos, na torcida ou no dia a dia.'
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
