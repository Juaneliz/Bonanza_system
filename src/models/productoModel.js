const db = require("../config/db");


async function getAllProducts() {

    const productosCompletos = db.productos.map(
        prod =>  {
            const precio = db.precios.find(p => p.Id_producto == prod.Id_producto);
            const categoria = db.categorias.find(c => c.Id_categoria == prod.Id_categoria);
            const existencia = db.inventario.find(p => p.Id_producto == prod.Id_producto);
            const imagen = db.imagenes.find(p => p.Id_producto == prod.Id_producto);

            return {
                id: prod.Id_producto,
                codigo: prod.codigo,
                nombre: prod.nombre,
                marca: prod.marca,
                unidad: prod.unidad,
                unidades_por_caja: prod.unidades_por_caja,
                
                // Información de categoría (para filtros futuros)
                id_categoria: prod.Id_categoria,
                categoria_nombre: categoria ? categoria.nombre : 'Sin categoría',

                // Precios
                precio_pieza: precio ? precio.precio_pieza : 0,
                precio_caja: precio ? precio.precio_caja : 0,

                // Existencias (para validar stock y carrito)
                unidades_existencias: existencia ? existencia.unidades_existencias : 0,
                cajas_existencias: existencia ? existencia.cajas_existencias : 0,
                tiene_stock: existencia ? existencia.unidades_existencias > 0 : false,

                // Imagen
                imagen_url: imagen ? imagen.url : '/img/products/default.png'
            };
        });

        return productosCompletos;
    
  
};

module.exports = {
    getAllProducts 
}