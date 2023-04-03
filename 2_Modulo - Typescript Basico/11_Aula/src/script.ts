//existem 2 formas de criar o nosso proprio type.

//1° escreve type coloca o nome com a primeira letra sempre maiuscula.
//como se fosse criar uma variavel, mas na verdade é um tipo e o valor a ser atribuido ao tipo criado é um tipo.

type NomeCompleto = string;

let nome: NomeCompleto = 'Diego';



type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade): Idade {
    return i;
}


// resumo(usuario: {nome:string,idade:number})

//para deixar o codigo mais organizado quando temos muuitos tipos, criamos um tipo que recebe um objeto com o nome e o tipo que ele é.

type User = {
    nome:string,
    idade:number
};


function resumo(usuario: User) {
    return `Olá ${usuario.nome}, voce tem ${usuario.idade} anos`;
}

resumo({
    nome:'Diego',
    idade: 90,
})


///// 2° interface, criasse com nome interface e ja colocar o objeto com os tipos

interface User2 {
    nome:string,
    idade:number
}


//diferenças

//type === variavel
// interface === function

//real diferença, com type uma vez que cria um type com ele, nao é alterável,nao pode adicionar um type... com o interface é alterável, voce consegue colocar mais coisas.