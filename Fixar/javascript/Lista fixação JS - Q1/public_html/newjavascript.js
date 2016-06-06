onload = function ()
{
    function calcularFatorial()
    {
        var paragrafo = document.createElement("p"); //cria elemento
        
        valor = document.querySelector("input[name=valor]").value;
        
        var i = 0, resposta=1;       

        for (i = valor; i >= 1; i--)
            resposta *= i;
        
        //console.log("O fatorial é:" + resposta);        
        //document.querySelector("p").innerHTML = "O fatorial é: " + resposta;
        
        paragrafo.textContent = "O fatorial é: " + resposta; //add um nó ao elemento(recebe o valor a ser impresso)
        var x = document.querySelector("p"); //cria uma variavel para me localizar no html.     
        x.appendChild(paragrafo); //insere na arvore, depois do x.
    };
    
    function calcularFibonacci()
    {       
        var x=document.querySelector("p");//localizar-se no html
        
        valor = document.querySelector("input[name=valor]").value;
        
        var a = 0, b = 1, c = 0, soma = 0;		

		/*console.log(a);
                console.log(b);*/
        
                soma += a + b;
                var paragrafo = document.createElement("span");
                paragrafo.textContent = "Sequência de fibonacci: " + a + " ";                
                x.appendChild(paragrafo);
                
                var paragrafo = document.createElement("span");
                paragrafo.textContent = b + " ";                
                x.appendChild(paragrafo);
                
		for (i = 2; i <= valor; i++)
		{
			c = a + b;
			a = b + c;
			b = c + a;
			
			if (a === valor || b === valor || c === valor)
			{
                            soma += valor;
				//console.log(valor);
                                var p = document.createElement("span");
                                p.textContent = valor + " ";                
                                x.appendChild(p);
                                
				break;
			}
			
			else if(c > valor)
                        {
                            soma+= c;
                            break;
                        }			
			
			else if(a > valor)
			{
                            soma += a;
				//console.log(c + " ");
                                var p = document.createElement("span");
                                p.textContent = c + " ";                
                                x.appendChild(p);
                                
				break;
			}
			
			else if(b > valor)
			{
                            soma += b;
				/*console.log(c);
                                console.log(a);*/
                                var p = document.createElement("span");
                                p.textContent = c + " ";                
                                x.appendChild(p);
                                
                                var p = document.createElement("span");
                                p.textContent = a + " ";                
                                x.appendChild(p);
				break;
			}			
			
			else
			{
                            soma += c + a + b;
				/*console.log(c + " ");				
				console.log(a + " ");				
				console.log(b + " ");*/
                                var p = document.createElement("span");
                                p.textContent = c + " ";                
                                x.appendChild(p);
                                
                                var p = document.createElement("span");
                                p.textContent = a + " ";                
                                x.appendChild(p);
                                
                                var p = document.createElement("span");
                                p.textContent = b + " ";                
                                x.appendChild(p);
			}				
		}
                
                var p = document.createElement("span");
                p.textContent = "Soma Fibonacci: " + soma;                
                x.appendChild(p);
    } 
    
    var botao = document.querySelector("input[name=fatorial]");
    botao.addEventListener("click", calcularFatorial, false);
    
    var botao2 = document.querySelector("input[name=fibonacci]");
    botao2.addEventListener("click", calcularFibonacci, false);   
};