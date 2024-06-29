/*---SERVIDOR ESTATICO EN EXPRESS----*/

// Accedo a todos los metodos y funciones de express
// Es un paquete externo, creado por un grupo para mejorar el servidor estatico nativo.
const express = require('express');

// Inicializo
const app = express();

let port = 3000;

/*
// / : pagina home del localhost:8080
// ENVIA UN SOLO FILE
app.get("/", (req, res) => {
    //res.send('Hola desde el servidor con express');
    res.sendFile(__dirname + '/public/index.html'); // SOLO UNA RESPUESTA POR LLAMADO
    res.sendFile(__dirname + '/public/style.css');
});
*/

//  MIDDLEWARE: una especie de filtro de cada solicitud antes de llegar a su disposicion final.
// ENVIA MULTIPLES ARCHIVOS. DE MANERA MÁS PROFESIONAL NO SE DEBE HACER
// DADO QUE NO ES LA IDEA QUE TODOS TENGAN ACCESO A NUESTROS ARCHIVOS
// A app.use no lo usaremos, será reemplazado por los get, put etc
app.use(express.static('public'));


app.get("/",(req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/contacto",(req, res) => {
    res.sendFile(__dirname + "/public/contacto.html");
});

// POSTMAN
app.post("/hola", (req,res) =>{
    res.send("Este ha sido un post satisfactorio");
})

app.listen(port, () => {
    console.log(`Servidor express ejecutandose en el puerto ${port}`);
});


//nodemon: node --watch indexedDB.js . Observara cambios en el archivo para que se actualize en la pagina