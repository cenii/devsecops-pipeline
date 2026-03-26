const express = require('express');
const app = express();
const port = 3000;

// Secreto hardcodeado a propósito
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";

app.get('/', (req, res) => {
    // Vulnerabilidad básica reflejando input sin sanitizar
    const user = req.query.user || "Bro";
    res.send(`<h1>Qué pasa, ${user}!</h1><p>Esta es la app de prueba para DevSecOps.</p>`);
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});