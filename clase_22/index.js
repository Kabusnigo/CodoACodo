/*---SERVIDOR ESTATICO EN EXPRESS----*/
const express = require('express');
const app = express();
let port = 3000;

const usuariosRouter = require('./routes/usuarios.js'); // Direccion de la pagina, no de la carpeta

app.use(express.json());

// Trabajo con un callback, en vez de hacer la funcion con req, res, lo resolvemos en el usuarios.js
app.use('/usuarios', usuariosRouter);

//  -------------- ROUTER --------------

app.get('/', (req, res) => {
    res.send("Server funcionando en el localhost");
});

app.listen(port, () => {
    console.log(`Servidor express ejecutandose en el puerto ${port}`);
});


//nodemon: node --watch indexedDB.js . Observara cambios en el archivo para que se actualize en la pagina