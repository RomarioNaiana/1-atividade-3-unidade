function calcularmedia (nota1, nota2){
var total = nota1 + nota2  
var media = total / 2
if(media<7){
    console.log("reprovado")
}else{
    console.log("Aprovado")
}
}

calcularmedia(7,9)