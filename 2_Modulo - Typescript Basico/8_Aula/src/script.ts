//no tipo de um objeto, abrimos o couchetes para explicar como sera cada propriedade desse objeto.

function resumo(usuario:{nome:string,idade:number},
     outro:{}
    ){
    return `Olá ${usuario.nome}, tudo bem ? Você tem ${usuario.idade} anos`;
}




let u = {
    nome: 'Diego',
    idade: 90,
    outro: 'abc'
}
resumo(u)

console.log(resumo(u));

//detalhe : nos podemos separar no objeto por virgula, ou por ponto e virgula.