//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

function toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {

lista[Contador].onclick = toca;

Contador = Contador + 1;

console.log(Contador);
}
