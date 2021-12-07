const input = document.getElementById("input");
const ul = document.getElementById("ul");
const tarefa = [];

function add() {
  if (!input.value) {
    alert("Nenhuma tarefa foi encontrada");
  } else {
    tarefa.push(input.value);
    input.value = "";
    render();
  }
}
function render() {
  ul.innerHTML = null;
  tarefa.forEach((i) => {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function () {
      const index = tarefa.indexOf(tarefa);
      tarefa.splice(index, 1);
      render();
    });
    li.appendChild(button);
  });
}
