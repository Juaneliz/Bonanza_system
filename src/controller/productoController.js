const productoModel = require('../models/productoModel');
const db = require('../config/db');


async function renderIndex(req, res) {
    try {
        const productos = await productoModel.getAllProducts();
        const categorias = db.categorias; // Para pintar los botones de categorías

        res.render('index', { 
            productos,
            categorias 
        });

    } catch(error){
        res.status(500).send("Error en el servidor");
    }

}

module.exports = { renderIndex };