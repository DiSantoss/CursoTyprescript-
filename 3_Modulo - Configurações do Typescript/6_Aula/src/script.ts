const botao = document.querySelector('button') as HTMLButtonElement;

botao?.addEventListener('click',()=>{
    console.log('Clicou!');
});

// adicionando isso ou nada no arquivo tsconfig nao muda nada 
//"lib":["DOM",
"ES5","DOM.Iterable","ScriptHost"]