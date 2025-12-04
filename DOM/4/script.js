let numero = 0;

const btnAdd = document.getElementById("btnAdd");
const btnAddRemover = document.getElementById("btnRemver");
const spanValor = document.getElementById("valor");

btnAdd.addEventListener("click", () => {
     numero++;
     spanValor.textContent = numero;

});

btnRemover.addEventListener("click", () => {
    numero--;
    spanValor.textContent = numero;

});