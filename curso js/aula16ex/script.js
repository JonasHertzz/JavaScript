function contar() {
var ini = document.getElementById('txti')
var fin = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if (ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'impossivel contar'
    //window.alert('erro')
} else { 
    res.innerHTML = 'contando: '
    let i = Number(ini.value)
    let f = Number(fin.value)
    let p = Number(passo.value)
    if (i < f)
    for(var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F60C}`
    } else {
        for(var c = i; c >= f; c-= p) {
            res.innerHTML += `${c} \u{1F60C}`
        }
    }
}
}