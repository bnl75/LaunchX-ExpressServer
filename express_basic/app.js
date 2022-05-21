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

//Inicializo la app de Express:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
});