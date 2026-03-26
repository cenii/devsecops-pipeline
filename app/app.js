const express = require('express');
const app = express();
const port = 3000;

// Secreto hardcodeado a propósito
const SLACK_BOT_TOKEN = "xoxb-123456789012-1234567890123-4567890123456-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";

app.get('/', (req, res) => {
    // Vulnerabilidad básica reflejando input sin sanitizar
    const user = req.query.user || "Bro";
    res.send(`<h1>Qué pasa, ${user}!</h1><p>Esta es la app de prueba para DevSecOps.</p>`);
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});