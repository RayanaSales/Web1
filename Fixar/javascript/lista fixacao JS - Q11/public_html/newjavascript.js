onload = function ()
{
    //pegando os valores do HTML: 
    var time = document.querySelector("form label:first-child + input");
    var numPontos = document.querySelector("form label[for=pontos] + input");
    var qtdJogos = document.querySelector("form label[for=qtdJogos] + input");
    var vitorias = document.querySelector("form label[for=vitorias] + input");
    var empates = document.querySelector("form label[for=empates] + input");
    var derrotas = document.querySelector("form label[for=derrotas] + input");
    var numGolsMarcados = document.querySelector("form label[for=numgolsm] + input");
    var numGolsSofridos = document.querySelector("form label[for=numgplss] + input");
    var saldoGols = document.querySelector("form label[for=sg] + input");
    var aproveitamento = document.querySelector("form label[for=aproveitamento] + input");
    var botao = document.querySelector("input[type=button]");
    
    //declarando a tabela:
    var tabela = document.createElement("table");    
    var indiceLinha = 0;
   
    function popularLinha()
    {    
        if(indiceLinha === 0)
            popularLinhaFixa();
        
        var conteudoCelula = [indiceLinha, time.value , numPontos.value , qtdJogos.value , vitorias.value, empates.value, derrotas.value, numGolsMarcados.value, numGolsSofridos.value, saldoGols.value, aproveitamento.value];
        var linha = tabela.insertRow(indiceLinha);
        
        for(var i=0; i<10 ; i++)
        {
            var celula = linha.insertCell(i);
            
            if(i===0)
            {
                celula.textContent = conteudoCelula[i] + '°'; //PQ ISSO N PEGA??????
                celula.style.fontWeight= "bold";                
            }            
            
            celula.textContent = conteudoCelula[i];  
            celula.style.border= "1px solid black";
            celula.style.textAlign= "center";
        }        
        tabela.style.borderCollapse = "collapse";        
        document.body.appendChild(tabela);  
        indiceLinha++;
    };    
    
    function popularLinhaFixa()
    {
        var conteudoPrimeiraCelula = ["Classificação", "Time" , "Número de pontos" , "Quantidade de jogos" , "Vitórias", "Empates", "Derrotas", "Número de gols marcados", "Número de gols sofridos", "Saldo dos gols", "Aproveitamento"];
        var linha = tabela.insertRow(indiceLinha);
                
        for(var i=0; i<10 ; i++)
        {
            var celula = linha.insertCell(i);
            celula.textContent = conteudoPrimeiraCelula[i];  
            celula.style.border= "1px solid black";
            celula.style.fontWeight= "bold";
            celula.style.textAlign= "center";
        }        
        tabela.style.borderCollapse = "collapse";          
        document.body.appendChild(tabela);  
        
        indiceLinha++;
    };
    
    botao.addEventListener("click", popularLinha, false);   
};