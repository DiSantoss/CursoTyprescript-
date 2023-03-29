//normalmente ao mechermos com typescript vamos nos deparar com uma pasta "public" e uma pasta "src"
//para a pasta public vai o html e o javascript , para a pasta src vai o codigo typescript.

//para gerar o codigo javascript no codigo certo damos o comando no terminal assim "tsc o nome da pasta e o nome do arquivo e o comando --outDir nome da pasta final.. ficando assim :
// tsc src/3_script.ts --outDir public


//agora vamos corrigir alguns erros, no caso o typescript está avisando no arquivo 3_script que o n1,n2 podem ocasionar erros.
//entao VAMOS no n1 colocamos dois pontos ":" e o type que queremos para esse parâmetro.
// (n1 : number, n2 : number)
//no nosso caso, eu ja formatei esse elemento com o parseint. mas se caso ele nao estivesse formatado poderiamos colocar o "+" antes da variavel numero1.value ficando +numero1.value.

//agora temos o ultimo para resolver, no res.
// e forma padrao, esse valor deveria ser uma string, porém nao está como string, entao nós podemos resolver adicionando pontotoString(), ficando assim 
//res.innerHTML = calcular(numero1.value , numero2.value).toString();
//e para testar precisamos sempre converte-lo.

