function fazerRequisicao(url:string,method:'GET' | 'POST') {
    // .....
}

 /* type Methods = 'GET' | 'POST'

let url = 'https://google.com.br';
let method: Methods = 'GET';

fazerRequisicao(url,method);

*/

//eu coloquei que pode ser usado o method get ou post, porque que esta dando error? o typescript está dizendo que os argumentos estao fracos, entao ele aciona para melhorar.
//entao criamos um tipoo especifico, agregamos a ele o valor de get ou post e usamos ele na variavel method.

// mudando de type Methods = 'GET' | 'POST' let url = 'https://google.com.br'; let method = 'GET'; fazerRequisicao(url,method); para o valor atual. --> let method: Methods = 'GET';

//com isso se caso eu quiser colocar a variavel method para algo qualquer, o codigo nao vai aceitar.


//se eu quiser usar assim :

type RequestDetails = {
    url:string,
    method: 'GET' | 'POST'
};


let red: RequestDetails = {
    url: 'https://www.google.com.br',
    method: 'GET'
};



fazerRequisicao(red.url, red.method);