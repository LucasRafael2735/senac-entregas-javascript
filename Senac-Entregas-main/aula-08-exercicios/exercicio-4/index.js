let número1 = Number(prompt("Me diga um número aleatório"))
let idade = Number(prompt("Me diga sua idade"))

console.log("O primeiro é maior que a idade", número1 > idade)

console.log("O primeiro é igual que a idade", número1 === idade)

console.log("O primeiro é divisível que a idade", (número1 & idade) === 0)

console.log("O idade é divisível que a primeiro", (idade & número1) === 0) 


