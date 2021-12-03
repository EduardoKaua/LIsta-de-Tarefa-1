const input = document.getElementById("input");
const ul = document.getElementById("ul");
const tarefa = [];

function add() {
  if (input.value != "") tarefa.push(input.value);
  input.value = "";
  render();
}
function render() {
  ul.innerHTML = null;
  tarefa.forEach((i) => {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  });
}

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});
