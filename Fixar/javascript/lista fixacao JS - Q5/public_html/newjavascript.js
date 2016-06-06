//     * Sites que usei para pegar a expressão regular:
//     * http://www.tutsup.com/2014/04/20/expressoes-regulares-em-javascript/
//     * 
//     * desse peguei as expressões:
//     * http://pt.stackoverflow.com/questions/11045/express%C3%A3o-regular-para-validar-um-campo-que-aceita-cpf-ou-cnpj
//     
//    
//    //var regular_expression = new RegExp('[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}');//criando a expressão regular
//    var regular_expression = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;//ou pode criar assim tb
//    
//    var minha_string = '103.713.574-11';
//    
//    if (regular_expression.test(minha_string)) // Verifica se a palavra existe na string
//        alert('Valido');    
//    else 
//        alert('Invalido');
   

/* VALIDAR DE ACORDO COM O CALCULO - http://www.geradorcpf.com/algoritmo_do_cpf.htm
 
 Achando o primeiro digito:

1- ler o cpf digitado.
2- colocar os valores do cpf, em um array (split)
3- fazer um for, que começa com i=10, termina em i=2, e decrementa 1 a cada loop.
4- percorrer o array, e multiplicar os nove primeiros digitos, pelo i do for anterior.
	var a = 0;         
		for(i=10 ; i>=2 ; i--)
                {   if (a < 9)
                    {
                       soma += arrayComCpf[a] * i;
                       a++; 
                    }                    
                }
5- resto = soma % 11
6- se resto < 2, então primeiroDigitoVerificador = 0, se não: primeiroDigitoVerificador = 11 - resto

Achando o segundo digito:
7- adiciona na ultima posição do nosso array o primeiroDigitoVerificador 
	array[9] = primeiroDigitoVerificador;
8- fazer um for, que começa com i=11, termina em i=2, e decrementa 1 a cada loop.
	var a = 0;
        
		for(i=11 ; i>=2 ; i--)
                {      
                    soma += arrayComCpf[a] * i; 
                    a++;
                }    
9- resto = soma % 11
10- se resto < 2, então segundoDigitoVerificador = 0, se não: segundoDigitoVerificador = 11 - resto
11- se primeiroDigitoVerificador = array[10] e segundoDigitoVerificador = array[11], o cpf é válido.
 */

onload = function ()
{
    var cpf = document.querySelector("form label:first-child + input");
    var botao = document.querySelector("form label:first-child + input + input");
    var resposta = document.createElement("p");
    
    var arrayComCpf = [], primeiroDigitoVerificadorCalculado, segundoDigitoVerificadorCalculado, a, i, soma, resto, primeiroDigitoVerificadorUsuario, segundoDigitoVerificadorUsuario;

    function formatarEntrada()
    {
        primeiroDigitoVerificadorCalculado = 0, segundoDigitoVerificadorCalculado = 0, a = 0, i = 0, soma = 0, resto = 0, primeiroDigitoVerificadorUsuario = 0, segundoDigitoVerificadorUsuario = 0;
        
        /*Esta expressão valida o formato: 00000000000*/
        var regular_expression = /[0-9]{11}/;
        
        if(regular_expression.test(cpf.value))
        { 
            prepararArray();
        }
        
        else
        {
            resposta.textContent = "Digite apenas os onze números do CPF que deseja validar.";
            resposta.style.color="red";
            document.body.appendChild(resposta);          
        }
    }

    function prepararArray()
    {       
        arrayComCpfDeStrings = cpf.value.split(""); //split retorna um array
        
        console.log(arrayComCpfDeStrings);
        
        for(i = 0 ; i< arrayComCpfDeStrings.length ; i++)
        {
            var variavelString = arrayComCpfDeStrings[i];
            var variavelInt = parseInt(variavelString);
            arrayComCpf[i] = variavelInt;            
        }
        
        console.log(arrayComCpf);
        
        calcularPrimeiroDigito();
    }
    
    function calcularPrimeiroDigito()
    {
         var a = 0;         
		for(i=10 ; i>=2 ; i--) //valores a qual temos q multiplicar
                {   if (a < 9)
                    {
                       soma += arrayComCpf[a] * i;
                       a++; 
                    }                    
                }
		
        console.log("Soma primeiro digito : " + soma);
        
        resto = soma % 11;
        
        if(resto < 2)
            primeiroDigitoVerificadorCalculado = 0;
        
        else
        {
            primeiroDigitoVerificadorCalculado = 11 - resto;
        }
        
        primeiroDigitoVerificadorUsuario = arrayComCpf[9]; //guardo o valor que o usuario informou como primeiro digito verificador
        arrayComCpf[9] = primeiroDigitoVerificadorCalculado; //atualizo o primeiro digito q verifica no array
        
        console.log("Primeiro digito: " + primeiroDigitoVerificadorCalculado);
        
        calcularSegundoDigito();
    }
    
    function calcularSegundoDigito()
    {
        soma = 0;
        var a = 0;
        
		for(i=11 ; i>=2 ; i--)
                {      
                    soma += arrayComCpf[a] * i; 
                    a++;
                }              
        
        console.log("Soma segundo digito : " + soma);

        resto = soma % 11;
        
        if(resto < 2)
            segundoDigitoVerificadorCalculado = 0;
        
        else
        {
            segundoDigitoVerificadorCalculado = 11 - resto;
        }
        
        segundoDigitoVerificadorUsuario = arrayComCpf[10];
        arrayComCpf[10] = segundoDigitoVerificadorCalculado;
        
        console.log("Segundo digito: " + segundoDigitoVerificadorCalculado);
        
        validarCpf();
    }
    
    function validarCpf()
    {
        if (primeiroDigitoVerificadorUsuario === primeiroDigitoVerificadorCalculado && segundoDigitoVerificadorUsuario === segundoDigitoVerificadorCalculado)
        {
            resposta.textContent = "Cpf válido.";
            resposta.style.color="blue";
            document.body.appendChild(resposta);
        }
        
        else
        {
            resposta.textContent = "Cpf INVÁLIDO.";
            resposta.style.color="red";
            document.body.appendChild(resposta);          
        }
    }
    
    botao.addEventListener("click", formatarEntrada, false);  
};