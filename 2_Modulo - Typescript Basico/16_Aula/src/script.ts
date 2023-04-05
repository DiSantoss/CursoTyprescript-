// types para funcao, 

type MathFunction = (n1:number,n2:number) => number;

// no comando acima, criamos um parametros que sera numbers e definimos que o retorno também será um number.


/*
const somar = (n1,n2) => {
    return n1 + n2;
}
*/

//agora para que essa variavel esteja formatada no type criado fazermo assim:

const somar:MathFunction = (n1,n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1,n2) => {
    return n1 - n2
}

const multiplicar: MathFunction = (n1,n2) => {
    return n1 * n2
}


const dividir: MathFunction = (n1,n2) => {
    return n1/n2;
}