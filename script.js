const input = document.getElementById("input");
const ul = document.getElementById("ul");
const tarefa = [];

function add() {
  tarefa.push(input.value);
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
