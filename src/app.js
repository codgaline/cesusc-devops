const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Rota para servir o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
