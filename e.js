//EX. 01
let nome="joão"
console.log(nome)

//EX. 02
let a=5 , b=10
console.log(a+b)

//EX. 03
let primeiroNome="Josefa", segundoNome="Silva"
console.log(primeiroNome, segundoNome)

//EX. 04A

let pessoa={nome:"Rafael", idade:17, endereco:"Zendron", telefone:40028922}
console.log(pessoa)

//EX. 04B

let frutas=["maça", "banana", "laranja"]
//frutas[3]="uva", funciona, mas precisa saber qual o número dentro.
console.log(frutas)
frutas.push("uva")//Adiciona sempre no final do vetor, independente do tamanho
console.log(frutas)

//EX. 05

let numeros=[1,2, 3, 4, 5]
console.log(numeros[0])
console.log(numeros[4])

//EX. 06

let cores=["vermelho", "verde", "azul"]
for(let i=0; i<3; i++){
    console.log(cores[i])
}

//EX. 07

let idade=18
if(idade<18){
    console.log("É de menor")
}else{
    console.log("É de maior")
}

//EX. 08

let nota=8
if(nota>=7){
    console.log("Aprovado")
}else{
    if(nota<7 && nota>5){
        console.log("De recuperação")
    }else
{
    console. log("Reprovado")
}}

//EX. 09

let DiaDaSemana=6
console.log(" 1) Segunda-Feira", "\n", "2) Terça-Feira", "\n", "3) Quarta-Feira", "\n", "4) Quinta-Feira", "\n", "5) Sexta-Feira", "\n", "6) Sábado", "\n", "7) Domingo ")
switch(DiaDaSemana){
    case 1: {
        console.log("Segunda-Feira")
        break//"Break", é o "pare"
    }
    case 2: {
        console.log("Terça-Feira")
        break//"Break", é o "pare"
    }
    case 3: {
        console.log("Quarta-Feira")
        break//"Break", é o "pare"
    }
         
    case 4: {
        console.log("Quinta-Feira")
        break//"Break", é o "pare"
    }
    case 5: {
        console.log("Sexta=Feira")
        break//"Break", é o "pare"
    }
    case 6: {
        console.log("Sábado")
        break//"Break", é o "pare"
    }
    case 7: {
        console.log("Domingo")
        break//"Break", é o "pare"
    }
    default: {//Default é tipo o "caso contrario"
        console.log('esse dia nao pode')
    }
   }

   //EX. 10

   let numerais=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   for(let c=0; c<10; c++){
    console.log(numerais[c])
   }
