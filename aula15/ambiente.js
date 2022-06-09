let num = [5, 8, 2, 9, 3] //declarando a variável num com os valor 5, 8, 2, 9, 3
num.push(1) //adicionando na variável num o valor 1
num.sort()//organizando meus valores dentro da variável
console.log(num)//mostrando na tela os valores da váriavel num
console.log(`O vetortem ${num.length} posições`)//mostrando na tela quantas posições de vetores tem
console.log(`O primeiro valor do vetor é ${num[0]}`)//mostrando na tela qual é o primeiro valor do vetor.
let pos= num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
