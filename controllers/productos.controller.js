import { Producto } from '../models/Producto.model.js';

//----GET----//
export const getProducts = async(req, res) => {
    Producto.findAll().then(productos => {
      res.json({ data: productos });
    }).catch(error => {
      res.json({ code: 500, message: "Error al cargar los productos" });
    })
  };

  //----POST----//
  