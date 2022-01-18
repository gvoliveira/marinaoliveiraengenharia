const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}


/*navegação */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

/*sombra no header */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){ //deslocamento da pagina é maior q o header, adicionar sombra
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
})
