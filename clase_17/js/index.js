// DOM (Document Object Model) y Eventos
/* 
    DOM 
El documento html se lo trata como a un objeto
element : etiquetas
att : atributos de la etiqueta como el class, id, rel, name
*/

//  ID

let div = document.getElementById("divPrueba");

// innerHTML : permite inyectar contenido html desde javascript

div.innerHTML = "<p> Hola mundo lalalal </p>";

console.log(document);

//  CLASS
let divClass = document.getElementsByClassName("test");

for (let i = 0; i < divClass.length; i++) {
    console.log(divClass[i]);

    if (i == 3)
        divClass[i].style.color = "blue";


}

/*
querySelector // Devuelve un elemento especifico
querySelectorAll // Devuelve todos los elementos
*/

let elemento = document.querySelector("#pepito");

// ACCEDIENDO AL NODO ELEMENTO
console.log(elemento);

// ACCEDIENDO AL NODO TEXTO DEL NODO ELEMENTO
// innerText = Cambia el texto de la etiqueta
console.log(elemento.innerText);
elemento.innerText = "JAVASCRIPT 7 - DOM CHAU Chau";

// ACCEDIENDO AL NODO INNER
// innerHTML = Edito a un elemento y lo reemplaza = "<a href="www.google.com.ar"> Hola </a>"
console.log(elemento.innerHTML);

/*
padre.AppendChild(hijo) = creamos una etiqueta hija en el padre
document.createElement('article') = puedo crear elementos
*/



//----------------------------------------------------------------------------

let superheroes = [
    {
        alias : "Iron Man",
        universo : "Marvel"
    },
    {
        alias : "Batman",
        universo : "DC"
    },
    {
        alias : "Deadpool",
        universo : "Marvel"
    },
    {
        alias : "Superman",
        universo : "DC",
    },
    {
        alias : "Hulk",
        universo : "Marvel",
    },
    {
        alias : "Wonder Woman",
        universo : "DC",
    },
]

let sectionMarvel = document.getElementById("marvel");
let sectionDC = document.getElementById("dc");

console.log(sectionMarvel);
console.log(sectionDC);


// Guardando Heroes de Forma DINAMICA!!
superheroes.forEach( heroe => {
    // Por cada heroe que encuentre en el Array de superheroes creo articulos
    // para mostrar a los superheroes en la pagina
    let contenedor = document.createElement('article');
    
    let data = `<h3> ${heroe.alias} </h3> 
                <p> ${heroe.universo} </p>`;

    contenedor.innerHTML = data;
    
    if (heroe.universo == "Marvel") {
        // Por cada heroe marvel, agregor un hijo que seria el Heroe del contenedor
        contenedor.className = "rojo";
        sectionMarvel.appendChild(contenedor);
    } else {
        contenedor.className = "azul";
        sectionDC.appendChild(contenedor);
    }

});