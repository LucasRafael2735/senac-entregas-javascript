//letra A


function imprimirPessoa (objeto) {
    
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}
const pessoa1 = {
    nome:'Lucas',
    apelidos: ['Luh', 'Luquinhas', 'lucao']
}

const pessoa2 = {
     ...pessoa1,
     apelidos: ['luFrangro', 'luvas', 'luvrinha']
}                  


imprimirPessoa(pessoa1)
imprimirPessoa(pessoa2)