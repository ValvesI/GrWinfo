//Alerta
alert('Testosterona ixtouradassa, esqueça tudo');

//Função que toca os sons das teclas ao apertar os botões
function tocasom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


//constante de todas as teclas
const listadeteclas = document.querySelectorAll('.tecla');

//variavel
let contador = 0

//enquanto
while (contador < listadeteclas.lenght) {

 const tecla = listadeteclas[contador];
 const analise = listadeteclas[contador].classList[1];

    console.log(idaudio);

    const idaudio = `#som_$(analise)`;

    tecla[contador].onclick =  function () {
        tocasom(idaudio);
    };

    contador = contador + 1;

    console.log(contador);

}
