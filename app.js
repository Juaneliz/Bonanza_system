const express = require('express');
const path = require('path');
const app = express();

// 1. Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// 2. Hacer pública la carpeta 'public' para el CSS e imágenes
app.use(express.static(path.join(__dirname, 'src/public')));

// 3. Tu ruta principal (Vista)
app.get('/', (req, res) => {
    // Renderea el archivo src/views/index.ejs
    res.render('index'); 
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});