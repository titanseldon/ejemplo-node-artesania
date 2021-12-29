var colors = require('colors');

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.set('port', 4000);
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto : '.magenta, app.get('port'));
});

//Enrutardor
app.use(require('./routes/rutas'));