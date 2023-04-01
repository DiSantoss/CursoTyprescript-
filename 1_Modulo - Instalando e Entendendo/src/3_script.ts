
// no começo da aula, percebemos que o typescript estava acionando um error do comando para criar um evento de click ao botão mais ou menos na linha 23, o error estava na declaração dos parametros, entao acrescentamos "as HTMLInputElement" dentro da declaração da variavel na linha 4, e com isso o erro desapareceu, ou seja, dizemos ao typescript que esse elemento é de um tipo específico.
//nós dizemos que esse elemento vai se comportar como HTMLInputElement, e isso quer dizer que todos os elementos vao ter o atributo value.

let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;

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
     res.innerHTML = calcular(numero1.value , numero2.value).toString();
});


//como fazemos para converter o código? vamos no terminal do vs ja com a pasta selecionada...