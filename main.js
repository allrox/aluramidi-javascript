// Função para tocar os áudios das tags HTML
function tocaSom(idAudioElement){
    const element = document.querySelector(idAudioElement);
       
        // Laço de verificação do elemento a ser executado
        if (element != null && element.localName === 'audio') {

            // 'currentTime' possibilita que 
            // o som seja reproduzido múltiplas vezes quando clicado
            // mesmo antes do fim da execução anterior (sem atraso)
            element.currentTime = 0; 
            element.play();

        } else {
            console.log('Elemento não encontrado ou seletor inválido.');
        }
}

// Cria uma lista de teclas (constante) a partir de uma query sobre o seletor de classe CSS '.tecla'
const keyList = document.querySelectorAll('.tecla');

// For acumulador menor que o tamanho da lista '.length'
for (let i = 0; i < keyList.length; i++) {

    // Busca na lista elementos do índice 'i'
    const key = keyList[i];
    
    // Atribui à constante instrument a classe da tecla obtida em classList '1'
    const instrument = key.classList[1];

    // Atribui à constante 'audioId' o som do instrumento utilizando Template String
    const audioId = `#som_${instrument}`;

    // Utilizando um evento anônimo no evento 'onclick'
    key.onclick = function(){
        tocaSom(audioId);
    };

    key.onkeydown = function(event){

        if(event.code === "Space" || event.code === "Enter"){
            key.classList.add('ativa');
        } else {
            console.log('Tecla inválida');
        }
    }

    key.onkeyup = function(){
        key.classList.remove('ativa');
    }

}
