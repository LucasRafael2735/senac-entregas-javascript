
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {

	const nomeDoador = prompt('Qual o seu nome completo?')
	const idadeDoador = Number(prompt('Qual sua idade?')) 
	const pesoDoDoador = Number(prompt('Qual seu peso ?')) 
	const tipoSanguineo = prompt('Qual seu tipo sanguíneo?').toUpperCase() 
	const ultimaDoacao = prompt('Quando foi sua última doação?') 
	
	const doador ={
		nome:nomeDoador,
		idade:idadeDoador,
		peso:pesoDoDoador,
		tipoSanguíneo:tipoSanguineo,
		ultimaDoação:ultimaDoacao, 

	}
	dados.push(doador) 
	
}


// Função para listar
function listar() {
     console.log(" # | NOME COMPLETO | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
   
     for(const [indice, objeto] of dados.entries()) {
      console.log(` ${indice + 1}: | ${objeto.nome}, | ${objeto.idade}, | ${objeto.peso}, | ${objeto.tipoSanguíneo}, | ${objeto.ultimaDoação}`)
	 } 

}


// Função para buscar
function buscarPorTipo() {
	const buscarPorSangue = prompt('Digite o tipo sanguíneo!') 
	
	 for (let i = 0; i <  dados.length; i++ ) {
           const item = dados[i] 

     if  (item.tipoSanguíneo === buscarPorSangue) {
		console.log(`${i + 1} | ${item.nome}, | ${item.idade}, | ${item.peso} | ${item.tipoSanguíneo} | ${item.ultimaDoação}`) }
	 
}

}

function buscarPorPessoa() {
     const buscarPorNome = prompt('Digite o nome de quem você quer procurar!')

  for (let i = 0; i <  dados.length; i++ ) {
           const item = dados[i] 

     if  (item.nome === buscarPorNome) {
		console.log(`${i + 1} | ${item.nome}, | ${item.idade}, | ${item.peso} | ${item.tipoSanguíneo} | ${item.ultimaDoação}`) }
	 
}

}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "HEMOCENTRO\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "4. Buscar doador por nome\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscarPorTipo()
			break
		case 4:	
            buscarPorPessoa()
			break
		case 0:
			sair()
			break
	}
}



