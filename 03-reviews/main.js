window.addEventListener("load", () => {
  crearPersona(personas[0]);
});

let icon = document.querySelectorAll(".boton");
let contenido = document.querySelector(".container");
let num = 0;
let personas = [
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    nombre: "Claral Morjeb",
    cargo: "Software Engineer",
    descripcion:
      " rerum recusandae excepturi commodi velit, expedita sed provident consequatur impedit animi eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/24/09/10/men-1276384_960_720.jpg",
    nombre: "Simon Straigh",
    cargo: "Web Designer",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque culpa rerum, quidem, ex saepe veritatis dolorum accusamus assumenda debitis quo nisi recusandae incidunt quaerat.",
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    nombre: "Luca Bermolop",
    cargo: "DevOps",
    descripcion:
      " distinctio officiis aliquam facere nam ducimus aliquid, quam eligendi et placeat natus magnam, molestiae atque. Sunt quisquam similique odio exercitationem velit natus in tempore cum",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg",
    nombre: "Sofie Claushk",
    cargo: "Product Manager",
    descripcion:
      "Sapiente non quis commodi quasi? Quas magni nostrum repellendus non, quis, vel cumque suscipit eius quam beatae quod ducimus ex blanditiis at animi sunt eos",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/04/09/08/00/girl-2215071_960_720.jpg",
    nombre: "Marth Vepril",
    cargo: "Web Developer",
    descripcion:
      "fuga et dolor quasi modi ea eius! Hic, eos laboriosam quos, vero similsantium pariatur rem veniam illo expedita, voluptates numquam nesciunt sed nostruique tempora iste laborum repellat exercitationem deleniti adipisci quia",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/04/04/10/50/girl-2201006_960_720.jpg",
    nombre: "Jhona Verlp",
    cargo: "Marketing",
    descripcion:
      "consectetur adipisicing elit. Minima facilis cupiditate, nostrum distinctio, rerum recusandae excepturi commodi velit, expedita sed provident consequatur impedit animi eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
];

let random = () => {
  return Math.floor(Math.random() * personas.length);
};

let crearPersona = (persona) => {
  contenido.innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute("class", "img__div");

  let img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", persona.img);

  let h2 = document.createElement("h2");
  h2.setAttribute("class", "container__nombre");

  let h4 = document.createElement("h2");
  h4.setAttribute("class", "container__cargo");

  let p = document.createElement("p");
  p.setAttribute("class", "container__p");

  let divCont = document.createElement("div");

  div.appendChild(img);
  h2.appendChild(document.createTextNode(persona.nombre));
  h4.appendChild(document.createTextNode(persona.cargo));
  p.appendChild(document.createTextNode(persona.descripcion));

  divCont.appendChild(div);
  divCont.appendChild(h2);
  divCont.appendChild(h4);
  divCont.appendChild(p);

  contenido.appendChild(divCont);
};

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    if (icon[i].id == "left") {
      if (num == 0) {
        num = personas.length - 1;
      } else {
        num--;
      }
    } else if (icon[i].id == "right") {
      if (num == personas.length - 1) {
        num = 0;
      } else {
        num++;
      }
    } else {
      let n = random();
      if (n == num) {
        if (num == personas.length - 1) {
          num -= 2;
        } else {
          num++;
        }
      } else {
        num = n;
      }
    }
    crearPersona(personas[num]);
  });
}
