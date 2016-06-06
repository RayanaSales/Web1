onload = function()
{
    var pinoBranco = document.getElementsByClassName("bolaBranca"); // BOLA BRANCA - COMEÇA COM ELE
    var pinoPreto = document.getElementsByClassName("bolaPreta");
    var tds = document.getElementsByTagName("td");
    var pretoLivre = document.getElementsByClassName("preto");
    var clicouBrancoGlobal = false;
    var pecaClicada = false;
    var posicaoIClicou = 0, posicaoJClicou = 0, posicaoIsoltou = 0, posicaoJSoltou = 0;
    var posI = 0, posJ = 0;
    var posicoesLivres = []; //diz se tem elementos ou não  
    var tabuleiro = [];
    var clicouNaBolaBranca = false;
    var vezDoBranco = true;
    var brancoJogou = true;
    var elementoClicado;

    for (var i = 0; i < pinoBranco.length; i++)
    {
        pinoBranco[i].addEventListener("mouseup", soltarClique, false);
        pinoBranco[i].addEventListener("mousedown", clicar, false);

        pinoPreto[i].addEventListener("mouseup", soltarClique, false);
        pinoPreto[i].addEventListener("mousedown", clicar, false);
    }

    for (var i = 0; i < pretoLivre.length; i++)
    {
        pretoLivre[i].addEventListener("mousedown", clicar, false);
        pretoLivre[i].addEventListener("mouseup", soltarClique, false);
    }
    inicializarTabuleiro();

    function inicializarTabuleiro()
    {
        var contador = 0;

        for (var i = 0; i < 8; i++) //percorre linha tabuleiro
        {
            tabuleiro[i] = [];
            for (var j = 0; j < 8; j++) //percorre coluna tabuleiro
            {
                tabuleiro[i][j] = tds[contador];
                contador++;
            }
        }
        console.log(tabuleiro);
    }

    function verificaPosicao(evt)
    {
        for (var i = 0; i < 8; i++)
        {
            for (var j = 0; j < 8; j++)
            {
                if (tabuleiro[i][j] === evt.target)
                {
                    posI = i;
                    posJ = j;
                }
            }
        }
    }

    function corDoPressionado(evt)
    {
        var clicouBranco = false;

        for (var i = 0; i <= pinoBranco.length; i++)
        {
            if (pinoBranco[i] === evt)
            {
                clicouBranco = true;
                console.log("Clicou no branco");
            }
        }

        if (clicouBranco === false)
            console.log("Clicou no preto");

        return clicouBranco;
    }

    function clicar(evt)
    {
        if (evt.target.className === "preto bolaBranca" || evt.target.className === "preto bolaPreta")
        {
            if (evt.target.className === "preto bolaBranca")
            {
                clicouNaBolaBranca = true;
                brancoJogou = true;
            }

            else if (evt.target.className === "preto bolaPreta")
            {
                clicouNaBolaBranca = false;
                brancoJogou = false;
            }

            if (clicouNaBolaBranca === vezDoBranco) //se forem iguais, pode jogar, ex? clicouNabranca = true, e vez da branca = true
            {
                console.log("apertou");

                clicouBrancoGlobal = corDoPressionado(evt.target);
                pecaClicada = true;

                verificaPosicao(evt);
                posicaoIClicou = posI;
                posicaoJClicou = posJ;
                console.log("posicaoIClicou: " + posicaoIClicou + " posicaoJClicou: " + posicaoJClicou);

                //evt.target.className = "preto";
                elementoClicado = evt.target;
            }

            else if (clicouNaBolaBranca !== vezDoBranco)
            {
                alert("Não é a sua vez de jogar.");
            }

            if (brancoJogou === true)
                vezDoBranco = false;
            else if (brancoJogou === false)
                vezDoBranco = true;
        }
    }

    function soltarClique(evt)
    {
        if (pecaClicada === true)
        {
            console.log("soltou");
            pecaClicada = false;

            verificaPosicao(evt);
            posicaoIsoltou = posI;
            posicaoJSoltou = posJ;
            console.log("posicaoIsoltou: " + posicaoIsoltou + " posicaoJSoltou: " + posicaoJSoltou);

            var jogadaValida = validarJogada();

            console.log("jogadaValida: " + jogadaValida);

            if (jogadaValida === true)
            {
                elementoClicado.className = "preto";

                if (clicouBrancoGlobal === true)
                    evt.target.className = "preto bolaBranca";
                else
                    evt.target.className = "preto bolaPreta";

                comeuAlgum();
            }
        }
    }

    function validarJogada()
    {
        var jogadaValida = false, posIMeio = 0, posJMeio = 0;
        var posIMeio = 0, posJMeio = 0;

        //qd  anda so uma casinha

        //console.log("dentro do valida: " + tabuleiro[posicaoIClicou][posicaoJClicou].className);
        if (tabuleiro[posicaoIClicou][posicaoJClicou].className === "preto bolaPreta") //o preto so pode subir
        {

            if ((posicaoIClicou - 1 === posicaoIsoltou) && (posicaoJClicou - 1 === posicaoJSoltou)) //cima a esquerda        
            {
                jogadaValida = true;
            }
            else if ((posicaoIClicou - 1 === posicaoIsoltou) && (posicaoJClicou + 1 === posicaoJSoltou)) //cima a direita        
            {
                jogadaValida = true;
            }
            else if ((posicaoIClicou - 2 === posicaoIsoltou) && (posicaoJClicou - 2 === posicaoJSoltou)) //cima a esquerda        
            {
                posIMeio = posicaoIClicou - 1;
                posJMeio = posicaoJClicou - 1;

                if (tabuleiro[posIMeio][posJMeio].className === "preto") //se ele pulou uma casinha livre ao jogar
                    naoPodeFazerEssaJogada();
                else {
                    jogadaValida = true;
                }
            }

            else if ((posicaoIClicou - 2 === posicaoIsoltou) && (posicaoJClicou + 2 === posicaoJSoltou)) //cima a direita        
            {
                posIMeio = posicaoIClicou - 1;
                posJMeio = posicaoJClicou + 1;
                if (tabuleiro[posIMeio][posJMeio].className === "preto")
                    naoPodeFazerEssaJogada();
                else {
                    jogadaValida = true;
                }
            }

        }

        else if (tabuleiro[posicaoIClicou][posicaoJClicou].className === "preto bolaBranca") //o branco so pode descer
        {

            if ((posicaoIClicou + 1 === posicaoIsoltou) && (posicaoJClicou - 1 === posicaoJSoltou)) //baixo a esquerda        
            {
                jogadaValida = true;
            }
            else if ((posicaoIClicou + 1 === posicaoIsoltou) && (posicaoJClicou + 1 === posicaoJSoltou)) //baixo a direita        
            {
                jogadaValida = true;
            }
            else if ((posicaoIClicou + 2 === posicaoIsoltou) && (posicaoJClicou - 2 === posicaoJSoltou)) //baixo a esquerda        
            {
                posIMeio = posicaoIClicou + 1;
                posJMeio = posicaoJClicou - 1;


                if (tabuleiro[posIMeio][posJMeio].className === "preto")
                    naoPodeFazerEssaJogada();
                else {
                    jogadaValida = true;
                }

            }

            else if ((posicaoIClicou + 2 === posicaoIsoltou) && (posicaoJClicou + 2 === posicaoJSoltou)) //baixo a direita        
            {
                posIMeio = posicaoIClicou + 1;
                posJMeio = posicaoJClicou + 1;


                if (tabuleiro[posIMeio][posJMeio].className === "preto")
                    naoPodeFazerEssaJogada();
                else {
                    jogadaValida = true;
                }
            }
        }
        else //caso ele tenha colocado em uma posicao livre, mas qdiferente, das 4 que ele pode usar
        {//volte os estilos            

            naoPodeFazerEssaJogada();
        }
        return jogadaValida;
    }

    function naoPodeFazerEssaJogada()
    {
        alert("Jogue para uma posição válida");

        if (clicouNaBolaBranca === false)
            tabuleiro[posicaoIClicou][posicaoJClicou].className = "preto bolaPreta";
        else if (clicouNaBolaBranca === true)
            tabuleiro[posicaoIClicou][posicaoJClicou].className = "preto bolaBranca";
    }

    function comeuAlgum()
    {
        var posIMeio = 0, posJMeio = 0;

        if ((posicaoIClicou - 2 === posicaoIsoltou) && (posicaoJClicou - 2 === posicaoJSoltou)) //cima a esquerda        
        {
            posIMeio = posicaoIClicou - 1;
            posJMeio = posicaoJClicou - 1;
        }

        else if ((posicaoIClicou - 2 === posicaoIsoltou) && (posicaoJClicou + 2 === posicaoJSoltou)) //cima a direita        
        {
            posIMeio = posicaoIClicou - 1;
            posJMeio = posicaoJClicou + 1;
        }

        else if ((posicaoIClicou + 2 === posicaoIsoltou) && (posicaoJClicou - 2 === posicaoJSoltou)) //baixo a esquerda        
        {
            posIMeio = posicaoIClicou + 1;
            posJMeio = posicaoJClicou - 1;
        }

        else if ((posicaoIClicou + 2 === posicaoIsoltou) && (posicaoJClicou + 2 === posicaoJSoltou)) //baixo a direita        
        {
            posIMeio = posicaoIClicou + 1;
            posJMeio = posicaoJClicou + 1;
        }

        if ((tabuleiro[posIMeio][posJMeio].className === "preto bolaBranca") || (tabuleiro[posIMeio][posJMeio].className === "preto bolaPreta"))
        {
            tabuleiro[posIMeio][posJMeio].className = "preto";
        }

    }
};

