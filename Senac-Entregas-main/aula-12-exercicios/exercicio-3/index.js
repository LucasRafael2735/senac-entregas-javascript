const n1 = Number(prompt('Digite um número')) 
const n2 = Number(prompt('Digite um outro número'))

const somar = function (a, b) {
    return Number(a) + Number(b)
}

const subtrair = function (a, b) {
    return Number(a) - Number(b)
}


const multiplicar = function (a, b) {
    return Number(a) * Number(b)
}


const dividir = function (a, b) {
    return Number(a) / Number(b)
}


console.log(`Números informados: ${n1} e ${n2}`)
console.log(`somar: ${somar(n1, n2)}`)
console.log(`subtração: ${subtrair(n1, n2)}`)
console.log(`multiplicação: ${multiplicar(n1, n2)}`)
console.log(`divisão: ${dividir(n1, n2)}`)

































