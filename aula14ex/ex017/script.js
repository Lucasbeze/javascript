function tabuada() {                                    // chamando a função tabuada pelo click do mouse
   var numero = document.getElementById('txtn')         // criando a variavel numero paga oq for digitado na caixa de texto txtn
   var tab = document.getElementById('seltab')          //criando a variavel tab pro select que esta no html
    if(numero.value.length == 0 ){                      //criando estrutura enquanto ( enquanto numero valer 0 faça essa ação se nao)
        window.alert('Por favor, Digite um número!')    //alerta de que nao foi digitado nenhum numero
    }else {                                             //se nao faça tudo que esta aqui embaixo
        var n = Number(numero.value)                    //criando a variavel n apartir da variavel numero que foi digitada e dando valor a ela .
        tab.innerHTML = ''                              //limpa tela
        for (var c = 1; c < 11; c ++){                  //criador da tabuada 
            var item = document.createElement('option') //criaçao da variavel item para incrementação do select 
            item.text = `${n} x ${c} = ${n*c}`          //mostrando texto dentro do select
            item.value= `tab${c}`                       //isso aki e mais pra PHP
            tab.appendChild(item)                       //dizendo que o tab e filho da variavel item.
        }
    }
}





