var agora = new Date()
var diaSem = agora.getDay()
/*
0 = domingo
1= seg
2= ter
4= quar
5= sex
6= sab */
console.log(diaSem)

switch(diaSem) {
case 0:
        console.log('domingo')
        break
case 1:
        console.log('seg')
        break
case 2: 
        console.log('ter')
        break
case 3:
        console.log('quar')
        break
case 4:
        console.log('quin')
        break
case 5: console.log('sex')
        break
case 6: console.log('sab')
        break
default:
    console.log('ERRO, dia invalido')
    break
}