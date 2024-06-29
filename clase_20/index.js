/*
const modulo = require("./sumador.js");
// Es como instanciar un objeto

let resultado = modulo(10, 5);

console.log(resultado);
*/

// TIPOS DE SERVIDORES:
// ESTATICOS - Devuelve archivos pre-armados que no se pueden cambiar
// DINAMICOS - Se genera el HTML por pedidos del usuario.

// ------------------------------------------------------------------

// SERVIDOR ESTATICO DE NODE (NATIVO)
// HTTP

// Le da toda la informacion del HTTP
// La constante http será un objeto y ahora lo puedo usar
// MODULO NATIVO: 'http' 'fs'
const http = require('http');
const port = 3000;

// Enviaremos archivos en vez de una etiqueta HTML
// fs File System
const fs = require('fs');

// Variable que creará un servidor

const server = http.createServer((req, res) =>
{
    /* Si Actualizo: ME LO MANDA VARIAS VECES para asegurarse que lo Envia. */
    console.log("URL solicitada: " + req.url);
    

    // Sincronico, bloquea hasta que termine de leer ese elemento.
    // Necesitará una ruta del archivo que quiero enviar para ello
    // uso la variable '__dirname' que me da la path del archivo.
    let file = fs.readFileSync(__dirname + '/archivos/index.html');

    // 200 - Solicitud esta bien. Acordate que tambien esta 404, etc
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
    /* Respondo mediante un HTML
    res.end(`<h1 style="color: hotpink" >Hola gente desde el servidor. Lo devuelvo por el text/plain </h1>`);
    */
    // Respondo mediante un archivo
    res.end(file);
    
}); 
// Puedo usar la funcion callback
// Callback, todo lo que debe aparecer cuando se crea un servidor
// Aparece un request (req) y un response (res)
// REQ: con solo ir a la direccion del dominio
// RES: devuelve el sitio al usuario
// Es una ejecución INFINITA, es como la página de google que siempre esta a disposición.
// Si hacemos un cambio en res.end(), y no cerramos el servidor. Seguira mostrando el antiguo mensaje.

// GET localhost:3000/

// PARA EJECUTARLO DEBO ABRIR UN PUERTO PARA QUE EL SERVIDOR  ESCUCHE SOLICITUDES O PEDIDOS:
// Requiero un puerto: 3000, 8080, etc
server.listen(port, () => {
    console.log(`Servidor arriba en el puerto ${port}`);
}); // ya tendriamos un SERVIDOR ESTATICO!