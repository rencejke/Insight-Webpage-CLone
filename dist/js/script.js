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