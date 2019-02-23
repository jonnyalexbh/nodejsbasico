/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Estoy en la ruta Home');
});

app.get('/app', (req, res) => {
  res.send('Estoy en la ruta /App');
});

app.get('*', (req, res) => {
  res.send('No se donde estoy');
});

app.listen(3000, () => {
  console.log('El servidor Express esta en escucha en el puerto 3000');
});
