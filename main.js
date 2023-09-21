//Alerta
//alert('Testosterona ixtouradassa, esqueça tudo');

function toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    lista[Contador].onclick =  function () {
        toca('#som_tecla_pom');
    }
const classe = lista[Contador].classlist[1];
console.log(classe);

Contador = Contador + 1;

console.log(Contador);
}
