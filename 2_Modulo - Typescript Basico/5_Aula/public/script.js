function firstLetterUpperCase(name, age) {
    var firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
    var mensagem = firstLetter + name.substring(1) + age;
    console.log(mensagem);
}
firstLetterUpperCase('diego', 26);
