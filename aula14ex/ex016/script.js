function contar() { // funçao que vai ativar tudo isso que eu digitei
    var ini = document.getElementById('txti') // pegando a caixa de texto txti e transformando em variavel ini
    var fim = document.getElementById('txtf') // pegando a caixa de texto txtf e transformando em variavel fim
    var passo = document.getElementById('txtp') // pegando a caixa de texto txtp e transformando em variavel passo
    var res = document.getElementById('res') //pegando o ID da div res e transformando em variavel res ( para resultado)


    var c = 1  //Variavel contadora
    if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0) { //ini.valuelength == 0 significa que a variavel inicio 
        res.innerHTML =  ' Impossivel Contar' // mostrando na tela impossivel contar
        //window.alert ('[ERRO] Verifique os dados e tente novamente!')
    }else {
        res.innerHTML = 'Contando: <br>'//mostrando na tela contando
        var i = Number(ini.value) // transforma a variavel ini em numero
        var f = Number(fim.value) // transforma a variavel fim em numero
        var p = Number(passo.value) // transforma a variavel passo em numero
        if(p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1') // mostrando alerta
            p = 1 // variavel passando a ser 1
        }
        if( i < f) {
            //CONTAGEM CRESCENTE
            for (var c = i; c <= f; c+= p){ //contador para calcular quando variavel c receber o inicio e o contador for menor que o fim ele vai contar adicionando o passo que a pessoa colocar
                res.innerHTML += `${c} \u{1F449}` //mostrando na tela a contagem crescente
            
            }
        }else { 
            //CONTAGEM REGRESSIVA
            for(var c = i; c >= f; c-= p){ //contador para calcular quando a variavel c receber o inicio e o contador for maior que o fim o contador conta tirando o passo que a pessoa colocar
                res.innerHTML+= `${c} \u{1F449}`//mostrando na tela a contagem regressiva
            }        
    }
    res.innerHTML+= `\u{1F3C1}` // mostrando na tela a bandeira de finalizado.
}
}
