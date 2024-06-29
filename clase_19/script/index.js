//      HTTP : Peticion al cliente

//      Ajax (Asyncronous Javascript and XML) : Si lo llamo, no tengo necesidad de recargar la pagina. Sino que te brinda la informacion de lo que clickees sin necesidad de ir a otra Pestaña
//      XML: Funciona como el JSON, pero es parecido al HTML. Ya no se usa tanto.

//      Peticiones AJAX en HTML. Son varias: librerias de 3ros, etc. El mas usado es el FETCH

//      FETCH
//      API Rest: Nos envia y trae datos. Esos datos empaquetados vienen en varios tipos, una recibiremos en Json o mejor dicho un objeto.
//      JSON: Estructura de información

//      Guarda la etiqueta main
let main_container = document.getElementById('characters');

let getCharacters = async () => {
    // Espero la respuesta de la Api. Obtengo la api
    let respuesta = await fetch('https://rickandmortyapi.com/api/character');

    // Guardo la dato usando Json.
    // Devuelve 1 array dentro hay 2 arrays: info y results. Servirá para inyectarlo adentro del DOM
    // Necesito separar info de results
    let data = await respuesta.json();

    const {info, results} = data; //Destructuring: Objeto Destructurado!! Los separe dado que solo me interesaria el results. En este caso puntual es necesario

    // Debo iterar por las cosas que estamos obteniendo.

    results.forEach(character => {
        let article = document.createElement('article');

        // Para poder editar en el css
        article.className = 'character';

        article.innerHTML = `
            <img src="${character.image}" alt= "Imagen de ${character.name}">
            <h2> ${character.name} </h2>
            <div>
                <p> ${character.species} </p>
                <p> <span class="${character.status.toLowerCase()}"> </span> </p>
            </div>
            <a href=""> Ver personaje </a>
        `;

        // Inyecto en el main_container la informacion de article.
        main_container.appendChild(article);
    });

}

getCharacters();
