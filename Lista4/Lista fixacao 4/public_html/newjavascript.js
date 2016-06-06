onload = function ()
{  
    var iniciarJogo = document.querySelector("form input[type=button]");    
    iniciarJogo.addEventListener("click", jogar, false);    
};

function jogar()
{
    var divs = document.querySelectorAll("div div");
    var rodada = document.querySelector("form input + label");
    var paragroPontos = document.querySelector("form input + label + label");  
    
    var j=0, o = 0,u = 0; 
    
    var rodadaAtual = 0;
    var cliquesDados = 0;
    
    var sequenciaCoresOriginal = [];
    var sequenciaCoresUsuario = [];    
   
    var acertou = 0;
    var pontos = 0;
    sortearCor();//assim que o jogo começa, sorteia uma cor   
   
    function sortearCor()
    {
        cor = Math.floor((Math.random() * 4) + 0);
        sequenciaCoresOriginal[o] = cor;     
        o++;
        
        piscar();
            
        rodadaAtual++;
    }   
    
    function clicouNaCorZero()
    {    
        simulaActive(0); 
        
        sequenciaCoresUsuario[u] = 0;
        
        console.log("Original: ");
        console.log(sequenciaCoresOriginal);
        console.log("Usuario: ");
        console.log(sequenciaCoresUsuario);
        
        u++;          
        cliquesDados++;
        
        if(rodadaAtual === cliquesDados)
            setTimeout(function(){verificaSeAcertouSequencia();}, 500);
    }
    
    function clicouNaCorUm()
    {       
        simulaActive(1); 
        
        sequenciaCoresUsuario[u] = 1;
        
        console.log("Original: ");
        console.log(sequenciaCoresOriginal);
        console.log("Usuario: ");
        console.log(sequenciaCoresUsuario);
    
        u++;  
        cliquesDados++;
        
        if(rodadaAtual === cliquesDados)
            setTimeout(function(){verificaSeAcertouSequencia();}, 500);
    }
    
    function clicouNaCorDois()
    {      
        simulaActive(2); 
        
        sequenciaCoresUsuario[u] = 2;
        
        console.log("Original: ");
        console.log(sequenciaCoresOriginal);
        console.log("Usuario: ");
        console.log(sequenciaCoresUsuario);
        
        u++;       
        cliquesDados++;
        
        if(rodadaAtual === cliquesDados)
            setTimeout(function(){verificaSeAcertouSequencia();}, 500);
    }
    
    function clicouNaCorTres()
    {
        simulaActive(3); 
        
        sequenciaCoresUsuario[u] = 3;
        
        console.log("Original: ");
        console.log(sequenciaCoresOriginal);
        console.log("Usuario: ");
        console.log(sequenciaCoresUsuario);
        
        u++;
        cliquesDados++;
         
         if(rodadaAtual === cliquesDados)
            setTimeout(function(){verificaSeAcertouSequencia();}, 500);
    }
    
    function verificaSeAcertouSequencia()
    {        
        acertou = 0;
        for(j = 0  ; j<sequenciaCoresUsuario.length ; j++)
        {
            if(sequenciaCoresOriginal[j] === sequenciaCoresUsuario[j])
                acertou++;
            
            rodada.textContent = "Rodada atual: " + rodadaAtual; // qd altera o conteudo n precisa dar um append, pq ele ja altera oq ta la
        }
          
        if(sequenciaCoresUsuario.length === acertou)
        {
            pontos++;
            paragroPontos.textContent = "Pontos: " + pontos;               
                 
            //LIMPAR O ARRAY E ZERA COISAS RELACIONADAS AO ARRAY:
            while(sequenciaCoresUsuario.length > 0) 
            {
                sequenciaCoresUsuario.pop();
            } 
            u = 0;
            acertou = 0;
            cliquesDados = 0;
            
            sortearCor();   
        }            
        
        else 
        {
            console.log("Original: ");
            console.log(sequenciaCoresOriginal);
            console.log("Usuario: ");
            console.log(sequenciaCoresUsuario);
            console.log("Acertos: ");
            console.log(acertou);
            
            alert("Você perdeu!");
        }
    }    
        
    function piscar()
    {   
        desabilitarCliques();
        piscaPisca(sequenciaCoresOriginal[0], 0);  
        habilitarCliques();
    }    
        
    function habilitarCliques()
    {
        divs[0].addEventListener("click", clicouNaCorZero, false);
        divs[1].addEventListener("click", clicouNaCorUm, false);
        divs[2].addEventListener("click", clicouNaCorDois, false);
        divs[3].addEventListener("click", clicouNaCorTres, false);
    }
    
    function desabilitarCliques()
    {
        divs[0].removeEventListener("click", clicouNaCorZero);
        divs[1].removeEventListener("click", clicouNaCorUm);
        divs[2].removeEventListener("click", clicouNaCorDois);
        divs[3].removeEventListener("click", clicouNaCorTres);
    }
    
    function simulaActive(posicao)
    {
        if(posicao === 0)
        {
            divs[0].style.backgroundColor = "black";           
            setTimeout(function(){divs[0].style.backgroundColor = "yellow";}, 250);//mostre meu clique antes de executar a sequencia original
        }
        
        else if(posicao === 1)
        {
            divs[1].style.backgroundColor = "black";           
            setTimeout(function(){divs[1].style.backgroundColor = "blue";}, 250);
        }
        
        else if(posicao === 2)
        {
            divs[2].style.backgroundColor = "black";           
            setTimeout(function(){divs[2].style.backgroundColor = "greenyellow";}, 250);
        }
        
        else if(posicao === 3)
        {
            divs[3].style.backgroundColor = "black";           
            setTimeout(function(){divs[3].style.backgroundColor = "red";}, 250);
        }
    }
   
    function piscaPisca(cor, j)
    {   
        if(cor === 0)
        {
            divs[0].style.backgroundColor = "black";            
            
            setTimeout(
            function()
            { 
                divs[0].style.backgroundColor = "yellow"; 
                if(j < (sequenciaCoresOriginal.length - 1))
                {
                    ++j;
                    setTimeout(function(){piscaPisca(sequenciaCoresOriginal[j], j);},500);                    
                }
            }, 500);
        }
        else if(cor === 1)
        {
            divs[1].style.backgroundColor = "black";
                       
            setTimeout(
            function()
            { 
                divs[1].style.backgroundColor = "blue"; 
                if(j < (sequenciaCoresOriginal.length - 1))
                {
                    ++j;
                   setTimeout(function(){piscaPisca(sequenciaCoresOriginal[j], j);},500);
                }
            }, 500);
        }
        else if(cor === 2)
        {
            divs[2].style.backgroundColor = "black";
                        
            setTimeout(
            function()
            { 
                divs[2].style.backgroundColor = "greenyellow"; 
                if(j < (sequenciaCoresOriginal.length - 1))
                {
                    ++j;
                    setTimeout(function(){piscaPisca(sequenciaCoresOriginal[j], j);},500);
                }
            }, 500);
        }
        else if(cor === 3)
        {
            divs[3].style.backgroundColor = "black";
            
            setTimeout(
            function()
            { 
                divs[3].style.backgroundColor = "red"; 
                if(j < (sequenciaCoresOriginal.length - 1))
                {
                    ++j;
                    setTimeout(function(){piscaPisca(sequenciaCoresOriginal[j], j);},500);
                }
            }, 500);
        }        
    }
}

