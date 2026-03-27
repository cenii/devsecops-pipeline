const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();
const port = 3000;

const csrfProtection = csrf({ cookie: true });
app.use(cookieParser());

app.get('/', csrfProtection, (req, res) => {
    const user = req.query.user || "Bro";

    res.json({
        mensaje: `Qué pasa, ${user}!`,
        info: "Esta es la app de prueba para DevSecOps 100% segura.",
        csrfToken: req.csrfToken()
    });
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});