let contador = 0;

function incrementar() {
    contador++;
    atualizarContador();
}

function decrementar() {
    contador--;
    atualizarContador();
}

function atualizarContador() {
    document.getElementById('contador').innerText = contador;
}