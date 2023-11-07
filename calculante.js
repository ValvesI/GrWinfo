function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operador = document.getElementById("operador").value;
    var resultado = 0;

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        case "**":
            resultado = numero1 ** numero2;
            break;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
