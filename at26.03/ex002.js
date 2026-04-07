function idadevotar(){
    let idade =  Number(document.getElementById('valor1').value)

    if (idade < 16){
        document.getElementById('frase').innerHTML = ("Você não pode votar")
    }
    
    else if (idade == 16 || idade == 17){
        document.getElementById('frase').innerHTML = ("Você pode escolher se quer votar ou não")
    }

    else {
        document.getElementById('frase').innerHTML = ("Você pode votar!")
    }
}