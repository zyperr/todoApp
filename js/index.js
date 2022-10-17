import { addTask } from "/components/addTask.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);

const darkmode = document.querySelector(".darkmode");

const cardContainer = document.querySelector(".mainCard");
darkmode.addEventListener("click", (evento) => {
  evento.preventDefault();
  cardContainer.classList.toggle("cardModoOscuro");
});
