let btn = document.querySelector(".btn");
let content = document.querySelector(".content");
let parrafo = document.querySelector(".parrafo__color");
let info = document.querySelector(".info");

let cambio = (color) => {
  info.style.display = "none";
  content.style.backgroundColor = color;
  parrafo.innerHTML = color;
};

let generarColor = () => {
  let num = [];
  for (let i = 0; i < 3; i++) {
    let n = Math.floor(Math.random() * (0 + 255 - 1));
    num.push(n);
  }
  let color = `rgb(${num[0]}, ${num[1]}, ${num[2]})`;
  cambio(color);
};

btn.addEventListener("click", generarColor);
