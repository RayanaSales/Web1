onload = function()
{
    var resposta = document.createElement("p");
    var botao = document.body.querySelector("input[type=button]");

    //para gerenciar os eventos - inputs form 1
    var radioUm = document.body.querySelector("#retangulo");
    var radioDois = document.body.querySelector("#triangulo");
    var radioTres = document.body.querySelector("#circulo");

    //labelFormDois: base, altura e campo
    var labelUmFormDois = document.body.querySelector("form + form label[for=campo1]");
    var labelDoisFormDois = document.body.querySelector("form + form label[for=campo2]");

    //pegando os inputs do form 2
    var campoUmFormUm = document.querySelector("#campo1");
    var campoDoisFormUm = document.querySelector("#campo2");

    document.styleSheets[0].insertRule("label[for=campo2] {visibility: visible;}", 0);
    document.styleSheets[0].insertRule("#campo2 {visibility: visible;}", 1);
   

    function calcularAreaRetangulo()
    {
        
        var areaRetangulo = (campoUmFormUm.value * campoDoisFormUm.value);
        
        resposta.textContent = "A área do retângulo é: " + areaRetangulo;
        document.body.appendChild(resposta);
    };
    
    function calcularAreaTriangulo()
    {
       var areaTriangulo = (campoUmFormUm.value * campoDoisFormUm.value)/2;       
       
       resposta.textContent = "A área do triângulo é: " + areaTriangulo;
       document.body.appendChild(resposta);
    };
    
     function attCamposParaTriRet()
    {  
        document.styleSheets[0].deleteRule(1);
        document.styleSheets[0].deleteRule(0);
        document.styleSheets[0].insertRule("label[for=campo2] {visibility: visible;}", 0);
        document.styleSheets[0].insertRule("#campo2 {visibility: visible;}", 1);
        labelUmFormDois.textContent = "Base";
    };
    
    function attCamposParaCirculo()
    {
        document.styleSheets[0].deleteRule(1);
        document.styleSheets[0].deleteRule(0);
        document.styleSheets[0].insertRule("label[for=campo2] {visibility: hidden;}", 0);
        document.styleSheets[0].insertRule("#campo2 {visibility: hidden;}", 1);
        labelUmFormDois.textContent = "Raio";
    };
    
    radioUm.addEventListener("click", attCamposParaTriRet, false);
    radioDois.addEventListener("click", attCamposParaTriRet, false);
    radioTres.addEventListener("click", attCamposParaCirculo, false);
};

