

function resumo(usuario:{nome:string,idade?:number}
    ){

        if(usuario.idade !== undefined ) {
    return `Olá ${usuario.nome}, tudo bem ? Você tem ${usuario.idade} anos`;
} else {
    return `Olá${usuario.nome}, tudo bem?`;
}
}


let u = {
    nome: 'Diego',
    idade: 90,
    outro: 'abc'
}
resumo(u)

//quando estamos mexendo com objeto, ao criar uma propriedade no objeto e colocar o acento de interrogação "?" antes do dois pontos, estamos dando o comando de que essa propriedade nao é obrigatória.