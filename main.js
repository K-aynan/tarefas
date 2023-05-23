function adicionarTarefa() {
  var novaTarefa = document.getElementById("nova-tarefa").value;
  var listaTarefas = document.getElementById("tarefas");
  var novaTarefaLi = document.createElement("li");
  var novaTarefaSpan = document.createElement("span");
  novaTarefaSpan.textContent = novaTarefa;
  novaTarefaLi.appendChild(novaTarefaSpan);
  listaTarefas.appendChild(novaTarefaLi);
  document.getElementById("nova-tarefa").value = "";
  novaTarefaSpan.addEventListener("click", function (event) {
    event.target.classList.toggle("done");
  });
}