let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)
//Foi dado esse tipo (indefinido) pois não tem um valor, pois é como se fosse uma gaveta vazia 
nome = prompt("Qual é o seu nome?") 
idade = prompt("Qual é sua idade?")
console.log(typeof nome)
console.log(typeof idade)
//agora temos strings,porque os seus valores foram atribuidos através do prompt, o prompt sempre retorna uma string 
console.log("Olá", nome, "sua idade é", idade) 
