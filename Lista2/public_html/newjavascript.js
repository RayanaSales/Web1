onload = function()
{
    var gerarNumeroAleatorio = document.querySelector("form #gerar");
    var mostrarNum = document.querySelector("form #mostrar");
    var ok = document.querySelector("form #ok");
    var entradaUsuario = document.querySelector("form input[type=text]");
    
    var paragrafo = document.createElement("p");    
       
    var numeroSorteado = Math.floor((Math.random() * 100) + 0); 
    console.log("Número sorteado primeira vez: " + numeroSorteado);
    
    var data = new Date();
    //data.setHours(20);
    var hora = data.getHours();
    
    if (hora >= 12 && hora <= 18)
    {
        document.body.className = "tarde";
    }    
    
    else if((hora >= 19 && hora <= 23) || hora===0)
    {
        document.body.className = "noite";
    }
    
    else if (hora >= 1 && hora <=6)
    {
        document.body.className = "madrugada";
    }
    
    function gerarNumero()
    {       
        numeroSorteado = Math.floor((Math.random() * 100) + 0);       
        
        paragrafo.textContent = "Número sorteado";
        document.body.appendChild(paragrafo);
        
        console.log("Número sorteado: " + numeroSorteado);
    };
    
    function mostrarNumero()
    {       
            paragrafo.textContent = "O número sorteado foi: " + numeroSorteado;
            document.body.appendChild(paragrafo);
    }; 
    
    function testarNumero()
    {            
        if(entradaUsuario.value > numeroSorteado)
        {
            paragrafo.textContent = "O número que você digitou é MAIOR que o número sorteado.";
            document.body.appendChild(paragrafo);
        }
        
        else if(entradaUsuario.value < numeroSorteado)
        {
            paragrafo.textContent = "O número que você digitou é MENOR que o número sorteado.";
            document.body.appendChild(paragrafo);
        } 
        
        else
        {
           paragrafo.textContent = "Parabéns você acertou!";
            document.body.appendChild(paragrafo); 
        }
    };
       
    gerarNumeroAleatorio.addEventListener("click", gerarNumero, false);
    mostrarNum.addEventListener("click", mostrarNumero, false);
    ok.addEventListener("click", testarNumero, false);
};