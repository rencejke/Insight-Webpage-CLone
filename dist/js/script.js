window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};



const burgir = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__action");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    menu.classList.toggle("open");
});

const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {   
link.addEventListener("click", () => {
link.querySelector("i").classList.toggle("open");
link.nextElementSibling.classList.toggle("open");
});
});
