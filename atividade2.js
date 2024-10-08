function votação (idade){
    if (idade<16){
        console.log("não votam")
}else if (idade==16 ||idade==17|| idade>=70){
    console.log("facultativo")
}else{
    console.log("obrigatório")
}
}
votação(50)