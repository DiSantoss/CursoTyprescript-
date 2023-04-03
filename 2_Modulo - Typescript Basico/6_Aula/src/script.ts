function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
    let mensagem = firstLetter+name.substring(1) +' '+ age;
    console.log(mensagem);
}


let nome: string = firstLetterUpperCase('Diego');

//nós adicionamos depois dos parametros dois pontos e o nome do tipo de retorno que queremos.

//podemos criar uma variavel dizendo que ela vai ser do tipo que queremos também colocando dois pontos após o nome da variavel.




function somar(n1:number,n2:number) {
    return `${n1+n2}`;
}

let alguma = somar(26,90);


// let alguma: number = somar(26,90);