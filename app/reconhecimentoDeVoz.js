const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    if (event && event.results && event.results.length > 0 && event.results[0].length > 0) {
        chute = event.results[0][0].transcript;
        exibeChuteNaTela(chute);
        verificaSeOChutePossuiUmValorValido(chute);
    }
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
