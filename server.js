// express server
const express = require("express");
const app = express();

// Configura la carpeta estática para servir archivos CSS y otros recursos
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname });
});

app.listen(3008, () => {
    console.log("server started on port 3000");
});


