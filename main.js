//Alerta
alert('Testosterona ixtouradassa, esqueça tudo');

//pom
function tocasompom () {
    document.querySelector('#som_tecla_pom').play();
}


//constante de todas as teclas
const listadeteclas = document.querySelectorAll('.tecla');

//variavel
let contador = 0

//enquanto
while (contador < 9) {
    listadeteclas[contador].onclick = tocasompom;

    contador = contador + 1;

    console.log(contador);

}
