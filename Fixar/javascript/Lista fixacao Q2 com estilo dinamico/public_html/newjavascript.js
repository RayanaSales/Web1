onload = function ()
{
    var linhaUm = document.querySelector("table tr + tr");
    var linhaDois = document.querySelector("table tr + tr + tr");
    var linhaTres = document.querySelector("table tr + tr + tr + tr");
    var linhaQuatro = document.querySelector("table tr + tr + tr + tr + tr");

    function limparCampo()
    {
        linhaUm.style.color = "black";
        linhaDois.style.color = "black";
        linhaTres.style.color = "black";
        linhaQuatro.style.color = "black";
    }
    ;

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


        if (imc < 18.5)
        {
            limparCampo();
            linhaUm.style.color = "red";

        }
        else if (imc >= 18.5 && imc < 25)
        {
            limparCampo();
            linhaDois.style.color = "red";
        }
        else if (imc >= 25 && imc < 30)
        {
            limparCampo();
            linhaTres.style.color = "red";
        }
        else if (imc >= 30)
        {
            limparCampo();
            linhaQuatro.style.color = "red";
        }

    }
    ;



    var range = document.querySelector("input[type=range]");
    range.addEventListener("change", calcular, false);

    var rangeDois = document.querySelector("input[type=range] + input");
    rangeDois.addEventListener("change", calcular, false);
};