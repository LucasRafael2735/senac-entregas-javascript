const estudo = prompt('Digite "M"(Matutino), "V"(Vespertino) e "N"(Noturno) correspondendo a qual parte do dia que você estuda!').toUpperCase() 


if (estudo === 'M') {
    console.log('Bom dia!')
}

else if (estudo === 'V') {
     console.log('Boa tarde!') 
}

else if (estudo === 'N') {
    console.log('Boa noite!')
}

else {
    console.log('Boa aula')
}