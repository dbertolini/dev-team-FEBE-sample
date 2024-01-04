const express = require("express");
const app = express();
const port = 3002;
const datoAutos = require("./datos.json");

// Genera un endpoint nuevo, que se accede yendo a la URL http://localhost:3002/hola
app.get("/hola", (req, res) => {
  console.log("hola mundo desde el backend"); // igual al print de python
  res.send(`Llego!!`);
});

app.get("/autos", (req, res) => {
  console.log("llega a autos");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(datoAutos); // linea de finalizacion de la llamada

  // const headers = {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "*",
  // };
  // const response = {
  //   statusCode: 200,
  //   headers: headers,
  //   body: JSON.stringify(datoAutos),
  // };
  // return response;
});

app.listen(port, () => {
  console.log(
    `Se ha inicializado el servidor!!! La API está escuchando en el puerto ${port}`
  );
});

// // Definimos una ruta GET que recibe un nombre como parámetro
// app.get('/saludo/:nombre', (req, res) => {
//   // Obtenemos el nombre del parámetro
//   const nombre = req.params.nombre;
//   // Enviamos una respuesta con el saludo
//   res.send(`Hola ${nombre}, bienvenido a la API con Node.js y Express`);
// });
