
function validar() {

    let nome = document.getElementById("nome").value

    let senha = document.getElementById("senha").value
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = ""



    if (nome === "") {

        resultado.innerHTML += "Nome não pode ser vazio!<br>"

    }



    if (senha.length <= 5) {

        resultado.innerHTML += "Senha fraca"

        resultado.style.backgroundColor = "red"
    }

    else if (senha.length <= 7) {

        resultado.innerHTML += "Senha média"
        resultado.style.backgroundColor = "orange"

    }
    else {
        resultado.innerHTML += "Senha forte"

        resultado.style.backgroundColor = "green"

    }

}

