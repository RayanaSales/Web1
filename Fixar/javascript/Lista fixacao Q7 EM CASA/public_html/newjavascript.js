'use strict';
onload = function ()
{
    //PEGANDO TODOS QUE VAMOS PRECISAR MANIPULAR:
    var radioRetangulo = document.querySelector("form input:first-child");
    var radioTriangulo = document.querySelector("#triangulo");
    var radioCirculo = document.querySelector("#circulo");
    var campoTextoUm = document.querySelector("#campoTextoUm");
    var campoTextoDois = document.querySelector("#campoTextoDois");
    var labelDoCampoDeTextoUm = document.querySelector("label[for=campoTextoUm]");
    var labelDoCampoDeTextoDois = document.querySelector("label[for=campoTextoDois]");
    var botao = document.querySelector("input[type=button]");
    
    var resposta = document.createElement("p");

    //pq se o usuario escolher primeiro circulo, lá ja começa deletando todas as sujeiras de antes, ai n teria nada para limpar:
    document.styleSheets[0].insertRule("label[for=campoTextoUm] {visibility: visible;}", 0);
    document.styleSheets[0].insertRule("label[for=campoTextoDois] {visibility: visible;}", 1);

    function padronizarCampos()
    {
        document.styleSheets[0].deleteRule(1);//limpa tudo que tem antes, para inserir um novo.
        document.styleSheets[0].deleteRule(0);
        
        document.styleSheets[0].insertRule("label[for=campoTextoUm] {visibility: visible;}", 0);
        document.styleSheets[0].insertRule("label[for=campoTextoDois] {visibility: visible;}", 1);
        
        labelDoCampoDeTextoUm.textContent = "Base: ";
    };

    function atualizaCamposTexto() //no caso do circulo
    {
        document.styleSheets[0].deleteRule(1);//limpa tudo que tem antes, para inserir um novo.
        document.styleSheets[0].deleteRule(0);

        document.styleSheets[0].insertRule("label[for=campoTextoDois] {visibility: hidden;}", 0);
        document.styleSheets[0].insertRule("#campoTextoDois {visibility: hidden;}", 1);
        
        labelDoCampoDeTextoUm.textContent = "Raio: ";
    };

    radioCirculo.addEventListener("click", atualizaCamposTexto, false);
    radioRetangulo.addEventListener("click", padronizarCampos, false);
    radioTriangulo.addEventListener("click", padronizarCampos, false);
    
    function calcularArea()
    {
        if(radioRetangulo.checked === true)
        {
            var area = campoTextoUm.value * campoTextoDois.value;
            resposta.textContent = "Área do retângulo: " + area;
            document.body.appendChild(resposta);
        }
        
        else if(radioTriangulo.checked === true)
        {
            var area = (campoTextoUm.value * campoTextoDois.value)/2;
            resposta.textContent = "Área do triângulo: " + area;
            document.body.appendChild(resposta);
        }
        
        else if(radioCirculo.checked === true)
        {
            var area = Math.PI * (campoTextoUm.value * campoTextoUm.value);
            resposta.textContent = "Área do circulo: " + area;
            document.body.appendChild(resposta);
        }   
    };
    
    botao.addEventListener("click", calcularArea, false);
};