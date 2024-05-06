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





//-------------------  STORAGE  ----------------------------
// Inspeccionar - Apliccation - Storage

// Se guardaran ambas por dominio

// LOCAL STORAGE - INDEFINIDA Solo soporta Strings. Guarda entre 5 a 10mb. 

// SESSION STORAGE - DEFINIDA / DURACION DE LA PESTAÑA DEL NAVEGADOR= Guarda entre 5 a 10mb, se guardara en el cliente, minimiza el trafico en la red. Si se desconecta la red.

// Vemos si el web API storga es compatible con el NAVEGADOR
if (typeof (Storage) != 'undefined') {
    // let cursos = ["HTML", "CSS", "JS", "VS Code"];
    // localStorage.setItem("cursosComprados", cursos);
    // localStorage.clear();
    // localStorage.removeItem("cursosComprados");


    // console.log(localStorage.getItem("cursosComprados"));
    // let cursosRecuperados = localStorage.getItem("cursosComprados");
    // console.log(typeof (localStorage.getItem("cursosComprados")));

    /* NO ME DEJARA AGREGAR UN NUEVO ELEMENTO AL ARRAY PORQUE ES UN STRING,
    EL STORAGE SOLO RECIBIRA STRINGS. Cuando lo suba lo hara en string, pero cuando lo baje para usarlo deberia pasarlo a Array.
    cursosRecuperados.push("Recuparados");

    SOLUCION: Convertilo en un archivo del tipo JSON
    JAVASCRIPT OBJECT NOTATION: Es una LENGUAJE INTERMEDIO. Se utiliza para comunicar API's entre si, o el Front con el BackEnd.
    Formato exclusivo de codigo para guardar datos.
    */



    // SOLO DURA DURANTE LA SESION DE LA PAGINA
    /*
    let preferenciaColor = ["Negro"];
    sessionStorage.setItem("preferenciaColor", preferenciaColor);
    */

} else {
    alert("STORAGE No es compatible con este navegador");
}



// --------------------------  JSON  -------------------------------

if (typeof (Storage) != 'undefined') {
    let cursos = ["HTML", "CSS", "JS", "VS Code"];
    // JSON.stringify(): SUBIDO CONVERTIDO A JSON al ARRAY
    localStorage.setItem("cursosComprados", JSON.stringify(cursos));


    // JSON.parse(): BAJADO CONVERTIDO A JSON al String
    let cursosRecuperados = JSON.parse(localStorage.getItem("cursosComprados"));

    console.log(typeof (cursosRecuperados));

    cursosRecuperados.push("HOLA");

    cursosRecuperados.forEach(curso => {
        console.log(curso);
    });

} else {
    alert("STORAGE No es compatible con este navegador");
}



