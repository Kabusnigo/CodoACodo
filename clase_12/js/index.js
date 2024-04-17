/* Forma de comentar */

/* Lo utilizamos para indicar errores o si debe continuar al momento de cargarse la pagina
o cualquier interacción del usuario con nuestro sitio */
console.log("Hola pendejo"); // No es un String, es un LITERAL(No ocupa espacio en memoria)
console.log("2+2=", 2 + 2);

console.warn("¡Cuidado niño!");
console.error("La cagaste wey");

var numerito = "Le asigno string";
numerito = 2; // Pasa a hacer númerico
numerito = false; // Ahora es booleano.

console.log(numerito);

/////////////////////////////////////////////////////////////////////////////////////
/* CONVENSION PARA NOMBRAR LAS VARIABLE:*/
/* camelCase */
var nombreUsuario = "Mateo";
var numTelUsuario = 112154523;

var mi_variable = 8008135;

const PI = 3.14;

/////////////////////////////////////////////////////////////////////////////////////
var a = "Hola me llamo Mateo"
var b = 23;
var c = 2.32;
var d = true;
var e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

/////////////////////////////////////////////////////////////////////////////////////
var nombre = prompt("Ingrese su nombre: ", "");
console.log("Hola, " + nombre + " pendejo");

document.write("Hola " + nombre);

/////////////////////////////////////////////////////////////////////////////////////