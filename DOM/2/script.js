const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

const bntP1 = document.getElementById("bntP1");
const bntP2 = document.getElementById("bntP2");
const bntP3 = document.getElementById("bntP3");

bntP1.addEventListener("click", function(){
    p1.textContent = "Paragrafo 1 alterado com sucesso";

});

bntP2.addEventListener("click", function(){
    p2.textContent = "Paragrafo 2 alterado com sucesso";

});

bntP3.addEventListener("click", function(){
    p3.textContent = "Paragrafo 3 alterado com sucesso";

});