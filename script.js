let tarefa = document.getElementById("tarefa");
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function adicionar() {

    if (tarefa.value.trim() === "") {
        alert("Digite Para Prosseguir!!");
        return;
    }

    tarefas.push(tarefa.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    tarefa.value = "";

    mostrarLista();
}


function mostrarLista() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {

        let li = document.createElement("li");
        let botao = document.createElement("button");

        li.textContent = tarefas[i];

        botao.textContent = "🗑️";
        botao.classList.add("remover");

        botao.addEventListener("click", function () {

            tarefas.splice(i, 1);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
            mostrarLista();

        });

        li.appendChild(botao);
        lista.appendChild(li);
    }
}

function alternarTema() {
    let body = document.body;
    body.classList.toggle("Tema-claro");
}







document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        adicionar();
    }

});
mostrarLista();