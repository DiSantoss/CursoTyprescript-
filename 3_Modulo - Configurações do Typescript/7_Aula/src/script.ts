//existe mais tres configurações importantes no arquivo tsconfig.json
//1° removeComments -> server para remover os comentarios do meu codigo ou diminuindo, ou seja, diminuindo bytes do sistema, sendo assim deixando ele mais leve.
// colocando "removeComments":true, la no arquivo tsconfig, ao transpilar ou compilar o arquivo de typescript para javascript, os comentarios que estavam no typescript serão excluídos, sendo assim nao vao passar para o arquivo javascript.
//caso coloquemos false nessa configuração, os comentarios aparecerão.
// (melhor geralmente tirar os comentarios.)
/* exemplo */
/* Variavel armazenando a idade do usuário.*/

//2° o segundo item é o noEmit, basicamente ele faz o seguinte : "nao cria os arquivos finais", 
//ou seja, quando queremos usar o typescript para ver onde pode ter erro ou absorver toda potencia do typescript e que nao queremos que esses codigos sejam emitidos, transpilados ou compilados para javascript, entao usamos o "noEmit".


//3° noEmitOnError, essa configuracao nao vem comentada no arquivo typescript, mas podemos simplesmente adicionar essa configuração ao typescript
/*"noEmitOnError":true, */
/*isso fara com que o arquivo nao seja emitido se tiver algum error.
um detalhe importante é que ele nao emite NADA se tiver algum error. */