onload = function()
{
    var pinos = document.getElementsByClassName("pino");
    var posicoes = []; //diz se a posição é true, undefined, ou false
    var elementos = []; //contem os elemntos, relacionado as posições

    var estamosVerificandoAPosicadoDoClicado = true;
    var posicaoIClicou = 0, posicaoJClicou = 0, posicaoIsoltou = 0, posicaoJSoltou = 0;
    var daEsquerdaParaDireita = false, deCimaParaBaixo = false;

    inicializarPosicoes();
    inicializarElementos();

    function inicializarPosicoes()
    {
        for (var i = 0; i < 7; i++)
        {
            posicoes[i] = [];

            for (var j = 0; j < 7; j++)
            {
                if (i === 3 && j === 3)
                    posicoes[i][j] = false;

                else if ((i === 0 && j === 0) || (i === 1 && j === 1) || (i === 1 && j === 0) || (i === 0 && j === 1) || (i === 0 && j === 5) || (i === 0 && j === 6) || (i === 1 && j === 5) || (i === 1 && j === 6) || (i === 6 && j === 1) || (i === 6 && j === 0) || (i === 5 && j === 1) || (i === 5 && j === 0) || (i === 6 && j === 6) || (i === 6 && j === 5) || (i === 5 && j === 6) || (i === 5 && j === 5))
                    posicoes[i][j] = undefined;

                else
                {
                    posicoes[i][j] = true;
                }
            }
        }
    }

    function inicializarElementos()
    {
        var posicaoElementos = 0;

        for (var i = 0; i < 7; i++)
        {
            elementos[i] = [];

            for (var j = 0; j < 7; j++)
            {
                if (posicoes[i][j] !== undefined)
                {
                    elementos[i][j] = pinos[posicaoElementos];
                    posicaoElementos++;
                }
            }
        }
    }

    function verificaSePodeUsarEsseElemento(evt)
    {
        var temElemento = false;
        var posicaoI = 0, posicaoJ = 0;

        //procurar a posição do elemento clicado
        for (var i = 0; i < 7; i++)
        {
            for (var j = 0; j < 7; j++)
            {
                if (elementos[i][j] === evt.target)
                {
                    console.log("alterei");
                    posicaoI = i;
                    posicaoJ = j;
                }
            }
        }

        console.log("posicao elemento i" + posicaoI);
        console.log("posicao elemento j" + posicaoJ);

        //verifica se a posição para move-lo é válida
        if (posicoes[posicaoI][posicaoJ] === true)
            temElemento = true;

        if (estamosVerificandoAPosicadoDoClicado === true)
        {
            posicaoIClicou = posicaoI;
            posicaoJClicou = posicaoJ;
        }
        else if (estamosVerificandoAPosicadoDoClicado === false) //é pq estamos verificando de onde ele soltou
        {
            posicaoIsoltou = posicaoI;
            posicaoJSoltou = posicaoJ;
        }

        console.log(posicoes);

        return temElemento;
    }

    function clicar(evt)
    {
        estamosVerificandoAPosicadoDoClicado = true;

        console.log("apertou");

        var temElemento = verificaSePodeUsarEsseElemento(evt);

        console.log("Tem elemento la: " + posicoes[posicaoIClicou][posicaoJClicou] + " posicaoIClicou: " + posicaoIClicou + " posicaoJClicou" + posicaoJClicou);

        if (temElemento === true)
        {
            elementos[posicaoIClicou][posicaoJClicou].style.backgroundImage = "none";
        }

        //else alert("Clique em um dos pinos");
    }

    function verificarSentidoMovimento()
    {
        if (posicaoJClicou < posicaoJSoltou) //da esquerda para direita
            daEsquerdaParaDireita = true;

        else if (posicaoJClicou > posicaoJSoltou) // ta da direita para esquerda
            daEsquerdaParaDireita = false;

        if (posicaoIClicou < posicaoIsoltou) // ta de cima para baixo
            deCimaParaBaixo = true;

        else if (posicaoIClicou > posicaoIsoltou) // ta de baixo para cima
            deCimaParaBaixo = false;
    }

    function soltarClique(evt)
    {
        estamosVerificandoAPosicadoDoClicado = false;

        console.log("soltei");

        var temElemento = verificaSePodeUsarEsseElemento(evt);

        if (temElemento === false) //se n tiver elemento onde ele quer colocar
        {
            elementos[posicaoIsoltou][posicaoJSoltou].style.backgroundImage = 'url("pino.jpg")';
            posicoes[posicaoIsoltou][posicaoJSoltou] = true; //agora tem um elemento onde ele soltou
            posicoes[posicaoIClicou][posicaoJClicou] = false; //liberar a posição onde foi clicado;

            //para tirar o elemento do meio eu tenho que verificar qual o sentido do movimento.
            verificarSentidoMovimento();

            if (daEsquerdaParaDireita === true || deCimaParaBaixo === true)
            {
                //pegar o elemento do meio e tirar o pino de lá
                var mudaX = true;
                if (posicaoIClicou === posicaoIsoltou) //decremente o y
                {
                    mudaX = false;
                    posicaoJSoltou--;
                    console.log('da esquerda para direita ');
                    elementos[posicaoIsoltou][posicaoJSoltou].style.backgroundImage = "none";
                    posicoes[posicaoIsoltou][posicaoJSoltou] = false;
                    posicaoJSoltou++;
                }

                else if (posicaoJClicou === posicaoJSoltou) //decremente o x
                {
                    posicaoIsoltou--;
                   console.log('cima para baixo');
                    //console.log(posicaoIsoltou);
                    //console.log(posicaoJSoltou);
                    elementos[posicaoIsoltou][posicaoJSoltou].style.backgroundImage = "none";
                    posicoes[posicaoIsoltou][posicaoJSoltou] = false;
                   // posicaoIsoltou++;
                }              
                impressoesParaTeste(mudaX);               
            }

            else if (daEsquerdaParaDireita === false || deCimaParaBaixo === false)
            {
                var mudaX = true;
                if (posicaoIClicou === posicaoIsoltou)
                {
                    console.log('direita ');
                    mudaX = false;
                    posicaoJSoltou++;
                    console.log(posicaoIsoltou);
                    console.log(posicaoJSoltou);
                    //console.log("j do meio: " + (posicaoJSoltou + 1));
                    //console.log('l do meio : ' + posicaoIsoltou);
                    elementos[posicaoIsoltou][posicaoJSoltou].style.backgroundImage = "none";
                    //console.log(elementos[posicaoIsoltou][posicaoJSoltou + 1]);
                    posicoes[posicaoIsoltou][posicaoJSoltou] = false;
                   // posicaoJSoltou--;
                    //console.log("j : " + posicaoJSoltou);
                    //console.log('l : ' + posicaoIsoltou);
                }

                else if (posicaoJClicou === posicaoJSoltou) // ta certo pq mudo o i
                {
                    posicaoIsoltou++;
                    console.log(posicaoIsoltou);
                    console.log(posicaoJSoltou);
                    elementos[posicaoIsoltou ][posicaoJSoltou].style.backgroundImage = "none";
                    posicoes[posicaoIsoltou][posicaoJSoltou] = false;
                   // posicaoIsoltou--;
                }
               // impressoesParaTeste(mudaX);
            }
        }

        else if (temElemento === true)
        {
            alert("Arraste para uma posição livre.");
            elementos[posicaoIClicou][posicaoJClicou].style.backgroundImage = 'url("pino.jpg")';//devolva o pino para onde ele tinha clicado
        }
    }

    function impressoesParaTeste(mudaX)
    {
        console.log("Onde clicou, tem elemento la: " + posicoes[posicaoIClicou][posicaoJClicou] + " posicoes: posicaoIClicou: " + posicaoIClicou + "  posicaoJClicou: " + posicaoJClicou);
        if (mudaX === true)
        {
            //posicaoIsoltou--;
            console.log("Meio, tem elemento la: " + posicoes[posicaoIsoltou - 1][posicaoJSoltou]);
            console.log("posicao i do meio: " + posicaoIsoltou);
            posicaoIsoltou++;
            console.log("posicao j do meio: " + posicaoJSoltou);
        }
        else
        {
            posicaoJSoltou--;
            console.log("Meio, tem elemento la: " + posicoes[posicaoIsoltou][posicaoJSoltou]);
            console.log("posicao i do meio: " + posicaoIsoltou);
            console.log("posicao j do meio: " + posicaoJSoltou);
            posicaoJSoltou++;
        }
        console.log("Onde chegou, tem elemento la: " + posicoes[posicaoIsoltou][posicaoJSoltou] + " posicoes: posicaoIsoltou: " + posicaoIsoltou + "  posicaoJSoltou: " + posicaoJSoltou);
    }

    for (var i = 0; i < pinos.length; i++)
    {
        pinos[i].addEventListener("mousedown", clicar, false);
        pinos[i].addEventListener("mouseup", soltarClique, false);
    }
};


//+ " posicoes: posicaoIsoltou - 1: " + posicaoIClicou -1 +  "  posicaoJClicou: " + posicaoJSoltou
//+ " posicoes: posicaoIsoltou: " + posicaoIClicou+  "  posicaoJClicou -1: " + posicaoJSoltou -1