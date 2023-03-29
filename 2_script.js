
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

let botao = document.getElementById('calcular');

let res = document.getElementById('resultado');

function calcular(n1,n2) {
    if(typeof n1 == 'number' && typeof n2 == 'number') {

    return n1 + n2; 

} else {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
}

botao.addEventListener('click',function(){
     res.innerHTML = calcular(numero1.value , numero2.value)
});
 

// também podemos transformar uma variavel em numero colocando o + antes da variavel assim
// return +n1 + +n2; ao invez de n1 = parseInt(n1); n2 = parseInt(n2);


// e é ai que ta a necessidade do typescript, com ele nós podemos exigir em uma função que o valor seja numero,string,boolean etc... entao o typescript se caso o valor de parametro nao for conforme exigido pela função, a função nem roda.
// com typescript nós podemos declarar que o n1 e n2 será sempre um número, se nao for nem roda a função.