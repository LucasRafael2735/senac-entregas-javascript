const comidasfavoritas =  [ "lasanha", "massa", "churrasco", "batata gratinada", "churrasco" ]

console.log(comidasfavoritas) 

console.log(`Essas são minhas comidas favoritas:`)
console.log(`1.`, comidasfavoritas[0]) 
console.log(`2.`, comidasfavoritas[1]) 
console.log(`3.`, comidasfavoritas[2]) 
console.log(`4.`, comidasfavoritas[3]) 
console.log(`5.`, comidasfavoritas[4]) 

const comidadousuario = prompt('Qual sua comida favorita?')

comidasfavoritas[1] = comidadousuario

// comidasfavoritas.splice(1,1, comidasfavoritas)