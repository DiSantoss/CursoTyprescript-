// retorno void, é quando temos uma função que vai cumprir o papel dela, mas ela nao tem nenhum tipo de retorno, ou seja, nao esperamos nenhum tipo de retorno para essa função.

function removerElemento(el: HTMLElement):void {
    // processo de remoção do elemento
    el.remove();
}

removerElemento( document.getElementById('teste'));

