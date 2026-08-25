// Module imports
const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));


//Middlewares
app.use(express.static(path.join(__dirname, 'src/public')));

// Route imports

const productoRoutes = require('./src/routes/productoRoutes');



// Routes

app.use('/', productoRoutes);



app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});