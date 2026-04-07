function SomarValores(){
   let n1 = Number(document.getElementById('Valor1').value)
   let n2 = Number(document.getElementById('Valor2').value)

    let soma = n1 + n2
    document.getElementById('resultado').innerHTML = soma
}