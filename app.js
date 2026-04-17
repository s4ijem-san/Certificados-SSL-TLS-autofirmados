const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor HTTPS funcionando de forma correcta.');
});

module.exports = app;