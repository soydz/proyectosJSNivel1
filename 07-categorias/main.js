import {alimentos} from "./inventario.js";
let contenido = document.querySelector(".section__contenido");
let categorias = document.querySelectorAll(".categorias__item");
let itemAnterior = categorias[0];

class Card {
  constructor(i) {
    this.url = alimentos[i].image;
    this.nombre = alimentos[i].titulo;
    this.descripcion = alimentos[i].descripcion;
    this.precio = alimentos[i].precio;
    this.categorias = alimentos[i].categorias;
  }
  ver() {
    let div = document.createElement("div");
    let divImg = document.createElement("div");
    let divP = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    div.setAttribute("class", "card");
    divImg.setAttribute("class", "card__div-img");
    divP.setAttribute("class", "card__div-p");
    img.setAttribute("src", this.url);
    h3.setAttribute("class", "card__title");
    p2.setAttribute("class", "card__descripcion");
    p3.setAttribute("class", "card__precio");

    h3.appendChild(document.createTextNode(this.nombre));
    p2.appendChild(document.createTextNode(this.descripcion));
    p3.appendChild(document.createTextNode(`$ ${this.precio}`));

    divImg.appendChild(img);
    divP.appendChild(h3);
    divP.appendChild(p2);
    divP.appendChild(p3);

    div.appendChild(divP);
    div.appendChild(divImg);

    contenido.appendChild(div);
  }
}

//FUNCION
let categoria = (cat) => {
  contenido.innerHTML = "";
  for (let i = 0; i < alimentos.length; i++) {
    if (cat == "todo") {
      let card = new Card(i);
      card.ver();
    } else if (alimentos[i].categorias.includes(cat)) {
      let card = new Card(i);
      card.ver();
    }
  }
};

window.addEventListener("load", categoria("todo"));

for (let i = 0; i < categorias.length; i++) {
  categorias[i].addEventListener("click", () => {
    if (categorias[i] == itemAnterior) {
      return;
    }
    itemAnterior.classList.remove("active");
    categorias[i].classList.add("active");
    itemAnterior = categorias[i];

    if (categorias[i].id == "postre") {
      categoria("postre");
    } else if (categorias[i].id == "todo") {
      categoria("todo");
    } else if (categorias[i].id == "desayuno") {
      categoria("desayuno");
    } else if (categorias[i].id == "almuerzo") {
      categoria("almuerzo");
    } else if (categorias[i].id == "cena") {
      categoria("cena");
    } else if (categorias[i].id == "dulce") {
      categoria("dulce");
    } else if (categorias[i].id == "saludable") {
      categoria("saludable");
    } else if (categorias[i].id == "salado") {
      categoria("salado");
    }
  });
}
