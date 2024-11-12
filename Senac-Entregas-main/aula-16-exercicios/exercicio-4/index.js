const cinema = prompt('Qual o gênero de filme que irão assitir ?') 
let gênero = 'fantasia'

const preço = Number(prompt('Qual o valor do ingresso ?')) 

if (cinema === gênero ) {
     console.log('Bom filme!')
}

else if (preço <= 15) {
    console.log(`O valor é ${preço}`) 
}

else {
    console.log('escolha outro filme!') 
    
}