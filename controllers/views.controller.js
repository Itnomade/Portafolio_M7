import { Producto } from '../models/Producto.model.js';

export const controllerHome = async (req, res) => {
  
  let productos = await Producto.findAll({
    raw: true,
    order: [
      ["nombre","ASC"]
    ]
  })

  console.log('productos: ',productos);

  res.render("home", {
    productos
  })
}