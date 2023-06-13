function taboada() {
var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

if (num.value.length == 0) {
    alert('Por favor, digite um número!')
} else {
    var n = Number(num.value)
    
    tab.innerHTML = ``
/* while (c <= 10) {
    var item = document.createElement('option')
    item.text = `${n} * ${c} = ${n*c}`
    tab.appendChild(item)
    c++ */ 
    for(i = 1; i <= 10; i++) {
        var item = document.createElement('option')
        item.text =`${n} * ${i} = ${n*i}`
        tab.appendChild(item)
    }

}}
