//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

function toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista=document.querySelectorAll('.tecla');

document.querySelector('.tecla_pom').onclick = toca;