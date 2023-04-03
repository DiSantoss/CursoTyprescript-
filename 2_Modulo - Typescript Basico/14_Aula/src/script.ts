//types literais
// basicamente significa que iremos dizer o type de um valor especifico mas tambem diremos o valor que ele vai ter

// let variavelNome: string = 'Diego';

//type literal
 let variavelNome: 'Diego' = 'Diego';

variavelNome = 'Diego';

variavelNome = 'pedro';

//percebe-se acima que ele aceita Diego, mas nao pedro... ou seja dentro da variavel só pode ter o valor correspondete ao primeiro 'Diego'


//ISSO É MUITO ÚTIL EM union types


//funcaoabaixo:
// function mostrarTexto (texto:string,alinhamento:string) 

function mostrarTexto (texto:string,alinhamento: 'left' | 'right' | 'center') 
{
    return ` <div style="text-align:${alinhamento}">${texto}</div>`;
}



mostrarTexto('Diego','left');
mostrarTexto('Diego','right');
//nesse ultimo caso, nao queremos que fique em blabla, entao usamos types literais.
//entao em alinhamento colocamos os types literais que quisermos exemplo
//percebe-se qyue colocando os literais o blabla nao é mais aceito.
mostrarTexto('Diego','blabla');

///--------------------------

type VerdadeiroOuFalso = true | false;

function temNome (nome:string): VerdadeiroOuFalso {
    if(nome !== '') {
        return true;
    } else {
        return false;
    }
}


/// ---------------------------
//vamos supor que vamos fazer uma function que vai botar propriedades especificas em um elemento html.
// pode receber um objeto com propriedades especificas ou o nome 'auto'

function configurar(props: {
    width:number, height:number
} | 'auto' ) {

}


configurar ({width:100, height:200});
configurar('auto');
configurar('automatico');
//percebe-se que com string automatico nao vai funcionar, porque é literal.

//lembrando que podemos deixar o codigo mais bonito com os comandos abaixo

type Opcoes = {
    width:number,
    height:number
}

//e entao atualizamos a function assim(comoutronomeparanaodarerror):
function configurarX(props: Opcoes | 'auto' ) {

}