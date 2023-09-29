//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

function toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const classe = lista[Contador].classList[1];
   // console.log(classe);
    
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);

    lista[Contador].onclick =  function () {
        toca(idAudio);
    }

Contador = Contador + 1;
//console.log(Contador);

}

