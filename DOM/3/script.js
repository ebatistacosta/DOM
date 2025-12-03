const texto = document.getElementsByClassName("texto");
const btnDestaque = document.getElementById("bntDestaque");

btnDestaque.addEventListener("click", function(){
    for(let item of texto){
        item.classList.toggle("highLight");
    }
});