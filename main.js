//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

//Função que toca os sons das teclas ao apertar os botões
function tocasom (seletorAudio) {
 const elemento = document.querySelector(seletorAudio);


 if (elemento && elemento.localName === 'audio') {

         elemento.play();
    }
   else {
    console.log('Esse elemento não existe');
   }
}


//constante de todas as teclas
const listadeteclas = document.querySelectorAll('.tecla');

//enquanto o contador acontece
for (let contador = 0; contador < listadeteclas.length; contador++) {

 const tecla = listadeteclas[contador];
 const analise = tecla.classList[1];

 //template dos audios---------------------------------------------------
    const idaudio = `#som_${analise}`;

    //console.log(idaudio);
//-------------------------------------------------------------
//Funções aplicadas nos botões
    tecla.onclick = function () {
        tocasom(idaudio);
    }
    //console.log(contador);
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
    }
        }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
