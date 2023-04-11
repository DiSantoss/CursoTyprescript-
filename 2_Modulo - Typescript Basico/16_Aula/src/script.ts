// retorno void, é quando temos uma função que vai cumprir o papel dela, mas ela nao tem nenhum tipo de retorno, ou seja, nao esperamos nenhum tipo de retorno para essa função.

function removerElemento(el: HTMLElement):void {
    // processo de remoção do elemento
    el.remove();
    
}

removerElemento( document.getElementById('teste'));


//quando nao colocamos o void

type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
    return 12;
}

let retorno = algo();

//quando colocamos void, entao é reduntante colocar "return" pq void quer dizer que nao é pra retornar nada.

const blabla = (): void => {
    return 
}