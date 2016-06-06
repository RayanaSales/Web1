onload = function()
{
    function calcular()
    {
        var antigoP1 = document.querySelector("form + p");
        var peso = document.querySelector("input[name=peso]").value;
        var novoP = document.createElement("p");
        novoP.textContent = "Peso: " + peso;
              
        document.body.replaceChild(novoP, antigoP1);        
        
        var antigoP2 = document.querySelector("p + p");
        var altura = document.querySelector("input[name=altura]").value;
        var novoA = document.createElement("p");
        novoA.textContent = "Altura: " + altura;
                
        document.body.replaceChild(novoA, antigoP2);
        
        var imc = peso / (altura * altura);
                
        var antigoP3 = document.querySelector("p:nth-child(7)");         
        var resposta = document.createElement("p");
        resposta.textContent = "Seu imc é: " + imc;
        document.body.replaceChild(resposta, antigoP3);
    };
    
    var range = document.querySelector("input[type=range]");
    range.addEventListener("change", calcular, false);    
    
    var rangeDois = document.querySelector("input[type=range] + input");
    rangeDois.addEventListener("change", calcular, false);
    
};