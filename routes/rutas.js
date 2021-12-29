const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('home.pug', {mensaje : 'Bienvenido a la página principal', titulo : 'Página Home'});
});

module.exports = router;