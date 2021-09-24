let items = document.querySelectorAll(".container__item");
let contenido = document.querySelectorAll(".container__item-contenido");
let estado = [];

let cerrar = (indice) => {
  for (let i = 0; i < items.length; i++) {
    if (i != indice) {
      contenido[i].classList.add("d-none");
      estado[i] = false;
    }
  }
};

let cambio = (i) => {
  estado[i] = !estado[i];
  if (estado[i]) {
    contenido[i].classList.remove("d-none");
    items[i].classList.remove("box");
    cerrar(i);
  } else {
    contenido[i].classList.add("d-none");
    items[i].classList.add("box");
  }
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    cambio(i);
  });
}
