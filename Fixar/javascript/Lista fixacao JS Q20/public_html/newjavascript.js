var contador = 3;
var minuto = 1;
var hora = document.createElement("h1");

function mueveReloj()
{
    //http://www.criarweb.com/artigos/490.php
    //http://www.w3schools.com/jsref/jsref_getseconds.asp

    if (minuto === 0 && contador === 0) {
        document.getElementById("myImg").src = "bombaexlodiu.jpg";
        hora.style.marginLeft = "24%";
        hora.textContent = "A bomba explodiu";
        document.body.appendChild(hora);
    }
    else if (contador === 0)
    {
        minuto--;
        contador = 3;        
        setTimeout("mueveReloj()", 1000);  //chame a função move relogio a cada 1000 milisegundos = 1 seg 
    }
    else if (contador >= 0)
    {
        --contador;

        hora.textContent = minuto + ":" + contador;
        hora.style.marginLeft = "45%";
        hora.style.fontSize = "500%";
        document.body.appendChild(hora);
        setTimeout("mueveReloj()", 1000);  //chame a função move relogio a cada 1000 milisegundos = 1 seg 
    }    
}
;