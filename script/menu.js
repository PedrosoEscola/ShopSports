//----------Menu animation----------//
let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')
const link = document.querySelector('.menu-section ul')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})

link.addEventListener('click', () => {
  document.body.style.overflow = 'initial'
  menuSection.classList.remove('on')
})
