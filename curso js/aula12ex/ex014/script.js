function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerText = `agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
// Bom dia
img.src = 'fotomanha.png'
document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
//Boa tarde 
img.src = 'fototarde.png'
document.body.background = '#b9846f'
} else { 
    //Boas noite
    img.src = 'fotonoite.png'
    document.body.background = '#515154'
}
}