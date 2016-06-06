onload = function ()
{
    var celula = document.querySelectorAll("td");
    var cor;
    
    function pintar(celula)
    {
       cor = prompt("Insira uma cor:", "red ou #000000 ou rgb(0,0,0)");
       
       celula.target.style.color = cor;
    }
    
    for (var i = 0 ; i< celula.length ; i++)
        celula[i].addEventListener("click", pintar, false);
};