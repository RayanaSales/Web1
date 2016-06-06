var figurasTotais = [];  
var coordenadasFiguras;
var cliques = null;

onload = function ()
{      
    var inicioImagens = Math.floor((Math.random() * 20) + 1); 
    var j = 0;
    
    for(var i = inicioImagens ; i<= 20 + inicioImagens; i++)//no pior caso, se inicioImagens = 20, ele comeca a contar de inicioImagens, e vai ate 40(a qtd total de figuras)
    {
        //nao pode comecar a contar do zero, pq se n so pega as 20 primeiras imgs
        figurasTotais[j] = "times (" + i + ").png";//preenche o array com 20 figuras, mas ele começa a contar a partir de um numero aleatorio inicioImagens                                              
        j++;
    }
    
    coordenadasFiguras = sortearPosicoesFigura();
    criarTabela();    
    
    //mostrarFiguras(coordenadasFiguras, figurasTotais);
};

function criarTabela()
{
    var tabela = document.createElement("table");
    var linhas = 0, colunas = 0;

    for (linhas = 0; linhas < 5; linhas++)
    {
        tr = document.createElement("tr");
        tabela.appendChild(tr);

        for (colunas = 0; colunas < 8; colunas++)
        {
            td = document.createElement("td");
            
            td.title = linhas + "-" + colunas;
            tr.appendChild(td); 
            
            td.addEventListener("click", function (e)
            {               
                virarCarta(e.target);
              
            }, false);     
            
            td.className = "carta fundoCarta";
        }
    }
    document.body.appendChild(tabela);
}

function sortearPosicoesFigura()
{
    console.log("bu");
    var contador = 40;
    
    var coordenadasFiguras = [];  

    for (var i = 0; i < 5; i++)
    {
        coordenadasFiguras[i] = []; //criei um array de array(uma matriz)
     
        for (var j = 0; j < 8; j++)
        {
            coordenadasFiguras[i][j] = null;          
        }
    }  
    
    do
    {        
        var posicaoLinha = Math.floor((Math.random() * 5) + 0);
        var posicaoColuna = Math.floor((Math.random() * 8) + 0);
        
        if(coordenadasFiguras[posicaoLinha][posicaoColuna] === null)
        {
            console.log(contador + " % 20 : " + contador % 20);
            coordenadasFiguras[posicaoLinha][posicaoColuna] = contador % 20; //gera a posicao de uma figura, para estar nas posicoes dos 
            contador--;            
        }        
    }
    while (contador > 0);    
    
    console.log(coordenadasFiguras);
    
    return coordenadasFiguras;
}

function mostrarFiguras(coordenadasFiguras, figurasTotais)
{
    var tabela = document.querySelector("table");
    
    console.log(tabela);
    
    for(var i = 0 ; i<5 ; i++)
    {
        for(var j = 0 ; j <8 ; j++)
        {
            var posicaoAtualFigura = coordenadasFiguras[i][j];//coordenadasFiguras = diz onde a figura, das figuras totais ta.
            console.log(figurasTotais[posicaoAtualFigura]);/*imprimir a figura que ta na figurasTotais, que ta na coordenada[i][j]*/
            console.log(tabela.childNodes[i].cells[j]);
            tabela.childNodes[i].cells[j].style.backgroundImage = "url('" + figurasTotais[posicaoAtualFigura] + "')"; 
        }
    }
}

function virarCarta(td)
{
    var posicao = td.title.split("-");   
    console.log(cliques);
    
    var posicaoAtualFigura = coordenadasFiguras[posicao[0]][posicao[1]];
    
    if(cliques === null)//se clicar uma vez, add um terceiro camo e troca de img
    {
        cliques = td;      
            
        td.style.backgroundImage = "url('" + figurasTotais[posicaoAtualFigura] + "')";   
    }    
    
    else //se clicar duas vezes, remove o campo, e remove a img
    {   
        var clicouNesse = cliques.title.split("-");   
        var posicaoClicouNesse = coordenadasFiguras[clicouNesse[0]][clicouNesse[1]];
        
        td.style.backgroundImage = "url('" + figurasTotais[posicaoAtualFigura] + "')";   
        
        if(posicaoClicouNesse === posicaoAtualFigura) //verifica se o cara acertou
        {
            cliques = null;
        }
        
        else //se ele errar, volte os dois
        {
            setTimeout(
                function()
                { 
                    td.style.backgroundImage = "url(tijolo.jpg)"; cliques.style.backgroundImage = "url(tijolo.jpg)";
                    cliques = null;
                }, 
              2000);   
        }              
    }   
}