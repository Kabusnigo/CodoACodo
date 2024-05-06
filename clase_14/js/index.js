/*      FUNCIONES       */

/*
function saludar(nombre = "") {
    if (nombre == "") {
        nombre = prompt("Ingrese su nombre: ", "");
        console.log("Hasta la vista, " + nombre);
    } else {
        console.log("Hasta la vista, " + nombre);
    }
}

saludar();
saludar("Mateo");
*/

/*
function resta(a=0, b=0) {
    return (a>=b) ? a-b : b-a;
}

let resultado = resta(4, 6);

console.log(resultado);
*/

/*      FUNCTION VS ARROW FUNCTION      */

function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(2, 2);
console.log("Resultado function es: " + resultado);

//      ARROW FUNCTION : La uso cuando no es complejo el contenido

let resultadoArrow = (a, b) => a * b;
console.log("Resultado arrow function es: " + resultadoArrow(10, 2));

// ---------------------------------------------------------------------

let saludarAdulto = edad => {
    return (edad >= 18) ? "Bienvenido" : "Debes ser mayor de edad";
}

console.log(saludarAdulto(17));

/*      FOR     */
/*
for (let i = 0; i < 5; i++) {
    console.log("i: " + i);
}
*/

/*
2 metodos, saludar a alguien y dividir valores numericos!
*/