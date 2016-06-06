onload = function()
{
    var jurosSimples = document.createElement("p");
    var jurosComposto = document.createElement("p");
    
    function calcularJurosSimples()
    {
        var c = document.querySelector("form input[name=capital]").value;        
        var i = document.querySelector("form input[name=juros]").value;
        var tempo = document.querySelector("form input[name=tempo]").value;
        
        var respostaJurosSimples = c * i * tempo;
        var m = c + respostaJurosSimples;
        
        console.log(c + i + tempo);
        
        jurosSimples.textContent = "Juros simples: " + respostaJurosSimples + " Montante: " + m;
        document.body.appendChild(jurosSimples);
    };
    
    function calcularJurosComposto()
    {
        var c = document.querySelector("form input[name=capital]").value;        
        var i = document.querySelector("form input[name=juros]").value;
        var tempo = document.querySelector("form input[name=tempo]").value;
        
        var montante = c * Math.pow(1 + i, tempo);
        var respostaJurosComposto = montante - c;
        
        jurosComposto.textContent = "Juros composto: " + respostaJurosComposto + " Montante: " + montante;
        document.body.appendChild(jurosComposto);
    };
    
    var botaoJurosSimples = document.querySelector("form input[value=JurosSimples]");
    botaoJurosSimples.addEventListener("click", calcularJurosSimples, false);  
    
    var botaoJurosComposto = document.querySelector("form input[value=JurosComposto]");
    botaoJurosComposto.addEventListener("click", calcularJurosComposto, false);
};
