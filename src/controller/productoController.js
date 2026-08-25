const productoModel = require('../models/productoModel');
const db = require('../config/db');


async function renderIndex(req, res) {
    try {
        const productoBuscado = req.query.busqueda;
        const categoryId = req.query.categoria;

        let products;
        if (categoryId){
            products = await productoModel.filterByCategory(categoryId);
        }
        else if(productoBuscado){
            products = await productoModel.buscarProductos(productoBuscado);
        }
        else {
            products = await productoModel.getAllProducts();

        }

        const categories = db.categorias; // Para pintar los botones de categorías

        res.render('index', { 
            products,
            categories,
            busquedaActual: productoBuscado || ''
        });

    } catch(error){
        res.status(500).send("Error en el servidor");
    }

}

module.exports = { renderIndex };