import express from 'express';
import categoryController from './controller/category.controller.js';

const app = express();

app.use('/categories', categoryController);

let HOSTNAME = 'localhost';
let PORT = 3000;
app.listen(PORT, HOSTNAME, () => {
    console.log(`Serveur lancé sur http://${HOSTNAME}:${PORT}`)
});

