function filmeFavorito(){
    let filme = document.getElementById('valor1').value
    let musica = document.getElementById('valor2').value
    let jogo = document.getElementById('valor3').value

    document.getElementById('frase').innerHTML = (`Seu filme favorito é ${filme}, você ama ouvir ${musica} e seu jogo favorito é ${jogo}`)
}