function imprimirDados(pessoa) {
	let resultado = []
	// desenvolver sua logica
	return resultado
    resultado.push(pessoa.nome, pessoa.nome.lenght, pessoa.idade, pessoa.idade.lenght, pessoa.profissão, pessoa.profissão.lenght)
    
}

const pessoa1 = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor" 

}

const pessoa2 = {
     nome:'José',
     idade: 20,
    profissão:'professor'
}
console.log(imprimirDados(pessoa1))
console.log(imprimirDados(pessoa2))

