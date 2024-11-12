// letra A

function Calculos (a,b) {
    const calculo = a + b   
    
    return calculo 
} 

 const calculoFeito = Calculos(10,5) 

 console.log(calculoFeito) 

//letra B 

function ImprimirMaiorOuIgual (a,b) {
       return a >= b 
} 

const Comparacao = ImprimirMaiorOuIgual(10,5) 

 console.log(Comparacao) 

// letra c 

function númeroPar (numero) {
     const numeropar = (numero % 2) === 0 
     return numeropar
}

console.log(númeroPar(100)) 



//Letra D

function dadosMensagem (mensagem) {
         const tamanho = mensagem.length 
        const maiúscula = mensagem = mensagem.toUpperCase()    
         console.log(tamanho, maiúscula)
}

dadosMensagem("Cleber é feio") 




