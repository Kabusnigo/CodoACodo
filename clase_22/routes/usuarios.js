const express = require('express');

const router = express.Router();

let usuarios = [
    {id: 1, nombre: "Mateo", apellido: "Sosa", mail: "desdlok122@hotmail.com"},
    {id: 2, nombre: "Paola", apellido: "Suárez", mail: "paolaa74@hotmail.com"},
    {id: 3, nombre: "Enrique", apellido: "Bustamante", mail: "enribust02@gmail.com"},
];

// ----------------  GET  ------------------------
/*
router.get('/', (req, res) => {
    res.json(
        {
            message : "Hola desde la ruta de usuarios"
        });
});
*/


router.get('/', (req, res) => {
    res.json(usuarios);
});



// RUTA PARAMETRIZADAS
router.get('/:id', (req, res) => {
    // Devuelve un boolean si esta el id  
    const user = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!user) return res.status(404).send("Usuario NO encontrado");

    res.json(user);
});


// ----------------  POST  ------------------------

router.post('/', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail
    }
    
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// ----------------  PUT  ------------------------

router.put('/:id', (req, res) => {
    const usuarioAEditar = usuarios.find((u => u.id === parseInt(req.params.id)));

    if (!usuarioAEditar) return res.status(404).send("Usuario NO encontrado");

    usuarioAEditar.nombre = req.body.nombre || usuarioAEditar.nombre;
    usuarioAEditar.apellido = req.body.apellido || usuarioAEditar.apellido;
    usuarioAEditar.mail = req.body.mail || usuarioAEditar.mail;
    
    res.json(usuarioAEditar);
});

// ----------------  DELETE  ------------------------

router.delete('/:id', (req, res) => {
    const indiceUsuario = usuarios.findIndex((u => u.id === parseInt(req.params.id)));

    if (indiceUsuario === -1) return res.status(404).send("Usuario NO encontrado");

    // splice(indiceUsuario, 1)  ->  1 borra desde indiceUsuario hasta...
    const usuarioEliminado = usuarios.splice(indiceUsuario, 1);
    
    res.json(usuarioEliminado);
});

module.exports = router;