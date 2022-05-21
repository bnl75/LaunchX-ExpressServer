//Uso de objeto tipo Express:
const express = require('express');

//Creo app de Express:
const app = express();

//Defino el puerto en el que se va a montar la app: localhost:3000
const port = 3000;

//Defino la ruta inicial del proyecto (tipo GET), la cual responde a la URL localhost:3000
app.get('/', (req, res) => {
    // Mando como respuesta a la petición de la URL para la ruta raíz un hello world:
    res.send("Hello World!!!");
});

//Defino la ruta launchx (tipo GET):
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a Launch X");
});

//Defino la ruta para regresar un objeto (tipo GET):
app.get('/explorersInNode', (req, res) => {
    // Creo objeto y lo mando como respuesta a la petición de la URL:
    const explorer = {name: "Explorer", msg: "Hello"};
    res.send(explorer);
});

/** QUERY PARAMS:
    Sirve para recibir parámetros que vienen en la URL.
    El objeto req contiene la propiedad params, esta propiedad
    contiene los Query Params (parámetros) enviados por la url (req.params).
*/
//http://localhost:3000/explorers/diego
//req.params = {"explorerName": "diego"};
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

//Inicializo la app de Express:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});