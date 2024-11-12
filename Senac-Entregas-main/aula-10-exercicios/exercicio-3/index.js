const listaDeTarefas = [] 

const tarefa1 = prompt('digite a tarefa 1:') 
const tarefa2 = prompt('digite a tarefa 2:') 
const tarefa3 = prompt('digite a tarefa 3:') 

listaDeTarefas.push(tarefa1, tarefa2, tarefa3) 

console.log(listaDeTarefas)

let tarefaRealizada = Number(prompt("digite o número da tarefa realizada (1, 2 ou 3)")) 
tarefaRealizada = tarefaRealizada - 1 

listaDeTarefas.splice(tarefaRealizada, 1) 

console.log(listaDeTarefas) 

