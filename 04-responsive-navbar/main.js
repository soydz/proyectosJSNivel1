let icon = document.querySelector(".header__icon-mobile");
let nav = document.querySelector(".nav");
let estado = false;

icon.addEventListener("click", () => {
  if (estado) {
    nav.style.display = "none";
    estado = !estado;
  } else {
    nav.style.display = "block";
    estado = !estado;
  }
});
