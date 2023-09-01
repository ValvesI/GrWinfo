//Alerta
alert('Testosterona ixtouradassa, esqueça tudo');

//pom
function tocasom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


//constante de todas as teclas
const listadeteclas = document.querySelectorAll('.tecla');

//variavel
let contador = 0

//enquanto
while (contador < listadeteclas.lenght) {
    listadeteclas[contador].onclick = tocasom;

    contador = contador + 1;

    console.log(contador);

}
