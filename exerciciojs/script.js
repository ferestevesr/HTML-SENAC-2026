
 const input = document.querySelector('input');
 const btn = document.getElementById('btnMostrar');
 const resultado = document.getElementById('resultado');
 btn.addEventListener('click', function() {
    
    const valor = input.value;  
    resultado.textContent = `Você digitou: ${valor}`;
    input.value = '';

    
});