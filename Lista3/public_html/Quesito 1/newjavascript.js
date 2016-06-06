onload = function()
{
    var tecla;    
    var quadrado = document.querySelector("div");
    
    var move = 20;
    
    var cima = 200;
    var esquerda = 200;
        
    function descobreTecla(evt)
    {
        tecla = evt.keyCode;
        
        console.log("tecla: " + tecla);
        
        moveQuadrado();
    };
    
    function moveQuadrado()
    {  
        if (tecla === 38)
        {
            console.log("cima");
            cima = cima - move;
            quadrado.style.top = cima + "px";
        }
        
        else if(tecla === 39)
        {
            console.log("direita");
            esquerda = esquerda + move;
            quadrado.style.left = esquerda + "px";
        }
        
        else if(tecla === 40)
        {
            console.log("baixo");
            cima = cima + move;
            quadrado.style.top = cima + "px";
        }
        
         else if(tecla === 37)
        {
            console.log("esquerda");
            esquerda = esquerda - move;
            quadrado.style.left = esquerda + "px";
        }   
    };    
    document.querySelector("body").addEventListener("keyup", descobreTecla, false);
};