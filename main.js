//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

//Função que toca os sons das teclas ao apertar os botões
function tocasom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


//constante de todas as teclas
const listadeteclas = document.querySelectorAll('.tecla');

//variavel do contador
let contador = 0

//enquanto o contador acontece
while (contador < listadeteclas.length) {

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

    contador = contador + 1;

    //console.log(contador);

}
