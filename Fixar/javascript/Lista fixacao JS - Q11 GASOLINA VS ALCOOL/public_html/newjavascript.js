onload = function()
{
    /* Site usado como base para calculo:
     * http://www.matematicadidatica.com.br/AbastecerCarroAlcoolGasolina.aspx
     * */
    
    var precoAlcool = document.querySelector("input[name=precoAlcool]");
    var precoGasolina = document.querySelector("input[name=precoGasolina]");    
    var botao = document.querySelector("input[type=button]");
    
    var vantagem = document.createElement("p");
    
    function calcularVantagem()
    {  
        var percentual = (precoAlcool.value / precoGasolina.value) * 100.0;
        
        if (percentual > 70.0)
        {
            vantagem.textContent = "É mais vantajoso abastecer com gasolina.";
            document.body.appendChild(vantagem);
        }   
        
        else if (percentual <= 70.0)
        {
            vantagem.textContent = "É mais vantajoso abastecer com álcool.";
            document.body.appendChild(vantagem);
        }
     
    }    
    botao.addEventListener("click", calcularVantagem, false);    
};