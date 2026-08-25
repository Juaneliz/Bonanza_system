
const categorias = [
    { Id_categoria: 1, nombre: "Farmacia" },
    { Id_categoria: 2, nombre: "Abarrotes" },
    { Id_categoria: 3, nombre: "Higiene personal" },
    { Id_categoria: 4, nombre: "Limpieza" }
];

const productos = [
    { Id_producto: 101, Id_categoria: 1, codigo: "FAR-1001", nombre: "Paracetamol 500mg", marca: "Genérico", unidad: "Caja", unidades_por_caja: 20 },
    { Id_producto: 102, Id_categoria: 2, codigo: "ABA-2001", nombre: "Zucaritas Original 620g", marca: "Kellogg's", unidad: "Pieza", unidades_por_caja: 12 },
    { Id_producto: 103, Id_categoria: 3, codigo: "HIG-3001", nombre: "Shampoo Sedal 620ml", marca: "Sedal", unidad: "Botella", unidades_por_caja: 24 },
    { Id_producto: 104, Id_categoria: 4, codigo: "LIM-4001", nombre: "Cloralex 950ml", marca: "Cloralex", unidad: "Botella", unidades_por_caja: 15 }
];

const precios = [
    { Id_producto: 101, precio_pieza: 25.00, precio_caja: 450.00 },
    { Id_producto: 102, precio_pieza: 67.00, precio_caja: 720.00 },
    { Id_producto: 103, precio_pieza: 55.00, precio_caja: 1200.00 },
    { Id_producto: 104, precio_pieza: 18.50, precio_caja: 250.00 }
];

const inventario = [
    { Id_producto: 101, cajas_existencias: 10, unidades_existencias: 200 },
    { Id_producto: 102, cajas_existencias: 0, unidades_existencias: 0 }, // Ejemplo sin stock
    { Id_producto: 103, cajas_existencias: 8, unidades_existencias: 192 },
    { Id_producto: 104, cajas_existencias: 15, unidades_existencias: 225 }
];

const imagenes = [
    { Id_producto: 101, url: "/img/products/paracetamol.png" },
    { Id_producto: 102, url: "/img/products/zucaritas.png" },
    { Id_producto: 103, url: "/img/products/sedal.png" },
    { Id_producto: 104, url: "/img/products/cloralex.png" }
];

module.exports = {
    categorias,
    productos,
    precios,
    inventario,
    imagenes
};



