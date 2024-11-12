//letra A

let Nomes = 'lucas'
let idade = 15
let cidade = 'São leopoldo'
let estudante = 'estudante' 

function imprimirTrabalho (Nomes, idade, cidade, estudante ) {
    console.log(`Olá meu nome é ${Nomes}, Tenho ${idade} anos, mora em ${cidade}, e sou ${estudante}. `)
}

imprimirTrabalho(Nomes, idade, cidade, estudante)  

//letra B

function outroNome (nome, idade, cidade, profissao) {
       return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`
}

console.log(outroNome("Cleber", 40, "Torres", "estudante"))

