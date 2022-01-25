const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*navegação */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/*sombra no header */

function changeHeaderWhenScroll() {
  //muda o header quando scrollar add sombra 
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navHeight) {
      //deslocamento da pagina é maior q o header, adicionar sombra
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
}


/* Carrossel com swiper para os depoimentos */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: { 
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/*Scroll reveal API */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 600,
  reset: true,
});

scrollReveal.reveal(
  `
#home .container-imagem, #home .container-texto, #portfolio .container-imagem, #portfolio .container-texto, #servicos header,
#servicos .card, #contato .container-texto, #contato .links,
footer .brand, footer .social`,
  { interval: 50 }
);

/*voltar ao topo botao */


function botaoTopoAparecer(){
  const botaotopo = document.querySelector(".voltar-topo");


  if (window.scrollY >= 560) {
    botaotopo.classList.add("show");
  } else {
    botaotopo.classList.remove("show");
  }


}

const secoes = document.querySelectorAll('section[id]')
function menuAtivoSecaoAtual(){

}


window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  botaoTopoAparecer()
})