import { addTask } from "../components/addTask.js";
import { displayTasks } from "../components/readTasks.js";
const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);

displayTasks();

const darkmode = document.querySelector(".darkmode");

const cardContainer = document.querySelector(".mainCard");
darkmode.addEventListener("click", (evento) => {
  evento.preventDefault();
  cardContainer.classList.toggle("cardModoOscuro");
});
