onload = function()
{
    var inicio = document.querySelector("input[name=start]");
    var fim = document.querySelector("input[name=end]");    
    var botao = document.querySelector("input[type=button]");
    
    function calcularTabuada()
    {  
        var element = document.getElementsByTagName("p");
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }

        var i, restoInicio, restoFim, tabuadaDo, comecaAqui, terminaAqui;        
        
        for(i = inicio.value ; i > 0; i--)
        {
            restoInicio = inicio.value % i;
            restoFim = fim.value % i;
            
            if(restoInicio === restoFim) {
                tabuadaDo = i;            
                break;
            }
        }
        
        
        //tabuadaDo * comecaAq = incio
        comecaAqui = inicio.value / tabuadaDo;
        terminaAqui = fim.value / tabuadaDo;
        
        for(i = comecaAqui ; i<= terminaAqui ; i++)
        {
            var resultado = document.createElement("p");
            resultado.textContent = tabuadaDo + " * " + i + " = " + tabuadaDo * i;
            document.body.appendChild(resultado);
        }        
    };
    
    botao.addEventListener("click", calcularTabuada, false);    
};