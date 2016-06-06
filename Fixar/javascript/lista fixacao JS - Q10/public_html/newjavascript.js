onload = function ()
{
    //pegando os valores do HTML: 
    var time = document.querySelector("form label:first-child + input");    
    var qtdJogos = document.querySelector("form label[for=qtdJogos] + input");
    var vitorias = document.querySelector("form label[for=vitorias] + input");
    var empates = document.querySelector("form label[for=empates] + input");
    var derrotas = document.querySelector("form label[for=derrotas] + input");
    var numGolsMarcados = document.querySelector("form label[for=numgolsm] + input");
    var numGolsSofridos = document.querySelector("form label[for=numgplss] + input");   
    var botao = document.querySelector("input[type=button]");
    
    //campos criados dinamicamente:    
    var saldoGols = 0;
    var aproveitamento = 0;
    var pontos = 0;
    
    //declarando a tabela:
    var tabela = document.createElement("table");    
    var indiceLinha = 0;
    var arrayPontos = [];
    var indiceArrayPontos = 0;
    
    function calcularDadosQueFaltam()
    {
        //pontos:
        pontos = (vitorias.value * 3) + (empates.value * 1);

        //saldo de gols:
        saldoGols = numGolsMarcados.value - numGolsSofridos.value;

        //aproveitamento:
        aproveitamento = (pontos) / (qtdJogos.value * vitorias.value);  
    };
   
    function popularLinha()
    {    
        calcularDadosQueFaltam();
        
        if(indiceLinha === 0)
            popularLinhaFixa();
        
        arrayPontos.push(parseInt(pontos));
        
        arrayPontos.sort(ordenarArray);
        
        for(i = 0 ; i < arrayPontos.length ; i++)
        {
            if(arrayPontos[i] === parseInt(pontos))
            {
                indiceArrayPontos = i + 1;
                break;
            }
        }
        
        var linhas = document.getElementsByTagName("tr");        
        for (i = indiceArrayPontos; i < linhas.length; i++) {
            linhas[i].childNodes[0].textContent = (i + 1) + "º";
        }
        
        var conteudoCelula = [indiceArrayPontos , time.value , pontos , qtdJogos.value , vitorias.value, empates.value, derrotas.value, numGolsMarcados.value, numGolsSofridos.value, saldoGols.value, aproveitamento.value];
        var linha = tabela.insertRow(indiceArrayPontos);
        
        for(var i=0; i<10 ; i++)
        {
            var celula = linha.insertCell(i);
            
            if(i===0)
            {
                celula.textContent = conteudoCelula[i] + '°'; 
                celula.style.fontWeight= "bold";                
            } else {
                celula.textContent = conteudoCelula[i];  
            } 
            
            celula.style.border= "1px solid black";
            celula.style.textAlign= "center";
        }        
        tabela.style.borderCollapse = "collapse";        
        document.body.appendChild(tabela);  
        indiceLinha++;
    };  
    
    
    function ordenarArray(a, b)
    {
         return b - a;
    }
    ;
    
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