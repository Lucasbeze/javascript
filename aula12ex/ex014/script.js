function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12 ){
        //BOM DIA!
        img.src = 'imagens/manha.png.png'
        document.body.style.background = '#bf9a76'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png.png'
        document.body.style.background = '#f2ba67'
    }else {
        //BOA NOITE !
        img.src = 'imagens/noite.png.png'
        document.body.style.background = '#0a191c'
    }
}
    