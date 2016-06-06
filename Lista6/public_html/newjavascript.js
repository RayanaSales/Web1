onload = function ()
{
    var tabela = document.createElement("table");
    var cadastrar = document.querySelector("input[type=button]");
    var funcionarios = new Array();
    var celulas = [];
    var linhaIndice = 0;
   
    document.body.appendChild(tabela);

    function pegarDadosFuncionario()
    {   
        var nome = document.getElementById("nome").value;
        var bday = document.getElementById("bday").value;
        var salario = document.getElementById("salario").value;

        var funcionario = {nome: nome, dataNascimento: bday, salario: salario};
        funcionarios.push(funcionario);
        console.log(funcionarios);
        adicionarNaTabela();
    }

    function adicionarNaTabela()
    {
        var conteudoCelula = [funcionarios[linhaIndice]["nome"], funcionarios[linhaIndice]["dataNascimento"], funcionarios[linhaIndice]["salario"], "Editar dados", "Deletar funcionário"];
        var linha = tabela.insertRow(linhaIndice);

        for (var i = linhaIndice; i < linhaIndice + 1; i++)
        {
            celulas[i] = [];
            for (var j = 0; j < 5; j++)
            {
                var celula = linha.insertCell(j);       
                celula.textContent = conteudoCelula[j];
                celula.className = "estiloCelula";

                if (j === 3)                
                    celula.addEventListener("click", editar, false);                 
                
                celulas[i][j] = celula;                
            }
        }
        tabela.appendChild(linha);
        linhaIndice++;
    }

    function editar(evt)
    {
        var posicao = encontrarPosicaoLinha(evt);       

        var nome = prompt("Novo nome:", "Funcionario");
        var dataN = prompt("Nova data nascimento:", "1990-32-3");
        var salario = prompt("Novo salario", "600");
        
        celulas[posicao][0].textContent = nome;        
        celulas[posicao][1].textContent = dataN;     
        celulas[posicao][2].textContent = salario;       
    }

    function encontrarPosicaoLinha(evt)
    {
        var linhaQueSeraAlterada = 1;        
      
        for (var i = 0; i < celulas.length; i++)
        {
            for (var j = 0; j < celulas[i].length; j++)
            {
                if (celulas[i][j] === evt.target)
                {
                    console.log("bu" + i);
                    linhaQueSeraAlterada = i;
                    break;
                }
                    
            }
        }        
        console.log(linhaQueSeraAlterada);
        return linhaQueSeraAlterada;
    }
    cadastrar.addEventListener("click", pegarDadosFuncionario, false);
};