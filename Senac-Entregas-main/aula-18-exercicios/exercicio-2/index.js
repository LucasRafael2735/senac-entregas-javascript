//arrayoriginal
const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function imprimirLista (Lista) {
     for(const item of Lista) 
console.log(item)
}

imprimirLista(arrayOriginal) 

//array2 

function imprimirLista2 (Lista) {
  for (const item of Lista) 
    console.log(item / 10)
} 
imprimirLista2(arrayOriginal) 

//array3

function imprimirLista3 (Lista) {
  
    const numeroPares = [] 

  if (item % 2 === 0) {
    numeroPares.push(item)
  } 
  return numeroPares
} 

imprimirLista3(arrayOriginal) 


//array4

function listarIndices (Lista) {
    const indice =[] 
    const total = Lista.lenght

    for(let i = 0; i < total; i++) {
        indice.push(`O elemento do índice ${i} é: ${Lista[i]}`)
    }

    return indice 
}

listarIndices(arrayOriginal) 

//array5
function encontrarMaiorMenor (Lista) {
    let numeroMaior = Lista[0]
    let numeroMenor = Lista[0]

    const igual = Lista.lenght 

    for (let i = 1; i < igual; i++) 
        const numeroAtual = Lista[i] 
if (numeroAtual > numeroMaior) {
    numeroMaior = numeroAtual
}

if (numeroAtual < numeroMenor ) {
    numeroMenor = numeroAtual
}
        }

        return [ numeroMenor, numeroMaior]


        console.log(encontrarMaiorMenor(arrayOriginal))