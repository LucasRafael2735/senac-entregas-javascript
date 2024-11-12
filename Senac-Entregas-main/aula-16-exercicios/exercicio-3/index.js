const estudo = prompt('Digite "M"(Matutino), "V"(Vespertino) e "N"(Noturno) correspondendo a qual parte do dia que você estuda!').toUpperCase() 


switch (estudo) {
    case 'M':
        console.log('Bom Dia!') 
    break
    case 'V':
        console.log('Bom Tarde!') 
    break
    case 'N':
        console.log('Bom Noite!') 
    break 
}

