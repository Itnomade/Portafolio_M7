// IMPORTAR LOS MODELOS
import { Producto } from "./Producto.model.js";
import { Carro } from "./Carro.model.js";
import { DetalleCarro } from "./DetalleCarro.model.js";
import { Usuario } from "./Usuario.model.js";
import { Ventas } from "./Ventas.model.js";
import { DetalleVenta } from "./DetalleVenta.model.js";

//RELACION CARRO A DETALLE
Carro.hasMany(DetalleCarro);
DetalleCarro.belongsTo(Carro);

//RELACION CARRO A USUARIO
Usuario.hasMany(Carro)
Carro.belongsTo(Usuario)

//RELACION DETALLE CARRO CON PRODUCTOS
Producto.hasMany(DetalleCarro);
DetalleCarro.belongsTo(Producto); 

//RELACION VENTA A DETALLE
Ventas.hasMany(DetalleVenta);
DetalleVenta.belongsTo(Ventas);

//RELACION VENTA A USUARIO
Usuario.hasMany(Ventas)
Ventas.belongsTo(Usuario)

//RELACION DETALLE VENTA CON PRODUCTOS
Producto.hasMany(DetalleVenta);
DetalleVenta.belongsTo(Producto); 
  
