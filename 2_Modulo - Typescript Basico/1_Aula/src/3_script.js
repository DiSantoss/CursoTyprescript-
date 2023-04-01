var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
//no exemplo acima, estamos setando na funcao calcular que o n2 deve ser string, mas estamos colocando numeros, e percebemos que ao tentar fazer o comando para criar um arquivo, no prompt da um error, mas apesar de mostrar o error, ele gerou o arquivo(esse é um comportamento padrao). Vamos previnir sobre essa situação.
//EXISTE UM ATALHO muito util, que é : 
// tsc script.ts e dai colocamos -> --noEmitOnError <- esse comando diz para nao emitir o arquivo com error.
//tenho uma duvida pq no meu prompt funciona o comando, e no terminal vs code nao?
