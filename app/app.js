const express = require('express');
// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const user = req.query.user || "Bro";
    // Devolver JSON evita la inyección XSS de HTML
    res.json({
        mensaje: `Qué pasa, ${user}!`,
        info: "Esta es la app de prueba para DevSecOps segura."
    });
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});