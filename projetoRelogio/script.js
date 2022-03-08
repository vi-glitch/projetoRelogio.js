function atualizarTempo(){

 var display = document.querySelector('.display')

var agora = new Date();

var horario = corigirHorario(agora.getHours()) + ':' + corigirHorario(agora.getMinutes()) + ':' + corigirHorario(agora.getSeconds());


display.textContent = horario;

}

function corigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero;
    }

    return numero;
}

atualizarTempo();

setInterval(atualizarTempo, 1000);

console.log(horario);
