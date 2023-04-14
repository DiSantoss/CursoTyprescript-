//vamos fazer agora configurações que sao muito úteis. Elas melhoraram significativamente a qualidade do seu código.

// uma delas é a "noUnusedLocals": true,

function somar(n1: number, n2: number): number {
    let nome: string = 'bonieky';
    return n1 + n2 ;
}

//temos uma outra opção que é a "noUnusedParameters": true,

function somar(n1: number, n2: number, n3): number {
    let nome: string = 'bonieky';
    return n1 + n2 ;
}

//essa configuração diz que dentro da função, esse valor n3 não está sendo usado, entao ele é inútil para essa função, devemos tira-lo.
//adicionando um acento de interrogação nele, ele fica não obrigatório, entao nao dará o error.


/*tem também o noImplicitReturns, ele restringe um pouco mais o uso da sua função. */

function somar(n1: number, n2: number, n3): number {
    if(n1 > 10) {
        return n1 + n2 ;
} else {
    return;
}
}


