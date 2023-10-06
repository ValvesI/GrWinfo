//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

function toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');



 for (let Contador = 0; Contador < lista.length; Contador++) {
    const tecla = lista[Contador];
    const classe =tecla.classList[1]
   // console.log(classe);
    
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);

    lista[Contador].onclick =  function () {
        toca(idAudio);
    }
    
//console.log(Contador);
tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList.add('ativa');
    console.log(evento.code === 'Space' || evento.code === 'Enter');
}
}

tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
 } }