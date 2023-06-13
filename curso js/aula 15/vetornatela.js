var valores = [8, 1, 4, 8, 3, 9]
valores.sort()
// console.log(valores) // errado

/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6]) // certo, porém "burro"

for(var pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} */ // certo

for(var pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} // certo e simplificado 