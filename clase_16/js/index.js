// ARRAY FUNCIONA COMO UNA LISTA
// Los Arrays pueden ser multiples tipos de valores. (String, number, boolean

let arrayPrueba = [33, 2, 5, 23, 8, 9];

let arrayFrutas = ["Manzana", "Banana", "Sandia", "Naranja"];

let arrayTres = [false, 20, "Hola"];

/*

for (let i = 0; i < arrayPrueba.length; i++) {
    console.log(arrayPrueba[i]);
}

arrayFrutas.push("Pera");
arrayFrutas.push("Arandanos");

for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

let ultimoBorrado = arrayFrutas.pop();

console.log("Elemento sacado del Array de Frutas: " + ultimoBorrado);

*/

let arrayPersonas = ["Mateo", "Micaela", "Natasha", "Joaquin"];

let arrayConcat = arrayFrutas.concat(arrayPersonas);

console.log(arrayConcat);

/* .sort(func) : Se Ordena segun el criterio de una funcion creada */

