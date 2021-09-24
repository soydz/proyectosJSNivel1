let btn = document.querySelectorAll(".btn");
let contador = document.querySelector(".contador");
let num = 0;

class Contar {
  constructor() {}
  sumar() {
    num++;
    this.contador();
  }
  reset() {
    num = 0;
    this.contador();
  }
  restar() {
    num--;
    this.contador();
  }
  contador() {
    contador.removeChild(contador.firstChild);
    contador.appendChild(document.createTextNode(num));
    if (num > 0) {
      contador.style.color = "#198754";
    } else if (num < 0) {
      contador.style.color = "#f44336";
    } else {
      contador.style.color = "#000";
    }
  }
}

let contar = new Contar(num);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let a = btn[i].classList[0];
    if (a == "sumar") {
      contar.sumar();
    } else if (a == "restar") {
      contar.restar();
    } else if (a == "reset") {
      contar.reset();
    }
  });
}
