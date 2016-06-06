function descobreCoordenada(evt) 
{
    var imagem = document.querySelector("img");//n pode usar o div, pq o div ocupa 100% de largura.

    var x = evt.clientX; //horizontal
    var y = evt.clientY; //vertical
    console.log("x: " + x + " y: " + y);

    imagem.style.top = y + "px";
    imagem.style.left = x + "px";
}

onload = function() 
{
    window.addEventListener("mousemove", descobreCoordenada, false); //coloca o evento na janela, pq se colocar no body, o body é ajustavel.(se colocar uma img, o body fica do tamanho da img, etc)
};