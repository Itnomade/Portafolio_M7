import { Usuario } from "./models/Usuario.model.js";
import { Producto } from "./models/Producto.model.js";

const users = [
  { name: "Pedro", email: "pedro@mail.com", password: "123456" },
  { name: "Carlos", email: "carlos@mail.com", password: "123456" },
  { name: "juan", email: "juan@mail.com", password: "123456" },
];

const products = [
  {
    id: "1",
    nombre: "Parlante Sony",
    descripcion: "Parlante Bluetooth Sony SRS-XB43 Negro",
    image: "fast_glass2.jpg",
    precio: 15000,
    stock: 10,
  },
  {
    id: "2",
    nombre: "Silla de Camping",
    descripcion: "Alpinextrem Silla de Camping Plegable Alpinextrem",
    image: "gold_3.jpg",
    precio: 22000,
    stock: 10,
  },
  {
    id: "3",
    nombre: "Zapatilla",
    descripcion: "Zapatilla Mujer Skechers",
    image: "iblack_4.jpg",
    precio: 25200,
    stock: 10,
  },
  {
    id: "4",
    nombre: "Linterna",
    descripcion: "Linterna Recargable Fenix E09R",
    image: "img_glass.jpg",
    precio: 12500,
    stock: 10,
  },
  {
    id: "5",
    nombre: "Estuche",
    descripcion: "Hori Estuche Nintendo Switch Hori Tough Pouch",
    image: "round_6.jpg",
    precio: 15000,
    stock: 10,
  },
  {
    id: "6",
    nombre: "Estuche",
    descripcion: "Hori Estuche Nintendo Switch Hori Aluminio Pikachu",
    image: "square_5.jpg",
    precio: 15000,
    stock: 10,
  },
];

const chargeUsers = async () => {
  for (let index = 0; index < users.length; index++) {
    const [user, created] = await Usuario.findOrCreate({
      where: { name: users[index].name },
      defaults: {
        name    : users[index].name,
        email   : users[index].email,
        password: users[index].password
      }
    });
  }
}

const chargueProducts = async () => {
  for (let index = 0; index < products.length; index++) {
    const [product, created] = await Producto.findOrCreate({
      where: { id: products[index].id },
      defaults: {
        id: products[index].sku,
        nombre: products[index].nombre,
        descripcion: products[index].descripcion,
        image: products[index].image,
        precio: products[index].precio,
        stock: products[index].stock,
      },
    });
  }
};

export const cargarSemillas = () => {
  chargeUsers();
  chargueProducts();
};
