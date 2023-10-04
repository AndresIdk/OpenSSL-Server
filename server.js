// express server
const express = require("express");
const app1 = express(); // Nginx 1
const app2 = express(); // Nginx 2

// Configura la carpeta estática para servir archivos CSS y otros recursos
app1.use(express.static(__dirname));

// Ruta servidor 1
app1.get('/', (req, res) => {
  res.sendFile('index1.html', {root: __dirname });
});

// Ruta servidor 2
app2.get('/', (req, res) => {
  res.sendFile('index2.html', {root: __dirname });
});

app1.listen(3008, () => {
    console.log("server started on port 3008");
});

app2.listen(3100, () => {
  console.log("server started on port 3100");
});
