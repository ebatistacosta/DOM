const adicionar = document.getElementById("adicionar");
const limpar = document.getElementById("limpar");
const input = document.getElementById("input");
const lista = document.getElementById("lista");

adicionar.addEventListener("click", () => {
    const nome = input.value.trim();

    if (nome === "") return;

    const li = document.createElement("li");

    li.textContent = nome;
    lista.appendChild(li);
    input.value = "";
    input.focus();
});

limpar.addEventListener("click", () =>{
    lista.innerHTML = "";
});