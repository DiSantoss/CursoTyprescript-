function firstLetterUpperCase(name: string, age: number) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
    let mensagem = firstLetter+name.substring(1) +' '+ age;
    console.log(mensagem);
}


firstLetterUpperCase('diego',26);