let cerrar = document.querySelector(".modal__icon");
let abrir = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let main = document.querySelector('.main');

abrir.addEventListener("click", () => {
  modal.classList.remove("none");
  modal.classList.add("block");
 
});
cerrar.addEventListener("click", () => {
  modal.classList.remove("block");
  modal.classList.add("none");
});
