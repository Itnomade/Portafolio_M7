import app from './app.js'
import { sequelize } from './database/database.js';


//IMPORTAR MODELOS 
import './models/Producto.model.js';
import './models/Carro.model.js';
import './models/DetalleCarro.model.js';
import './models/Usuario.model.js';
import './models/Ventas.model.js';
import './models/DetalleVenta.model.js';


//IMPORTAR RELACIONES
import './models/Relaciones.js';

// importar datos de prueba
import { cargarSemillas } from './seeds.js'

const forceMetod = true // Si fuerzo la sincronizacion borra los datos y carga las semillas

const main = async () => {
    try {
     await sequelize.authenticate();
     console.log("Nos hemos conectado con èxito");
      await sequelize.sync({
        force: forceMetod, 
        alter: true
      });
    
      if (forceMetod) {
        cargarSemillas()
      }

      let PORT = 3002;
      app.listen(PORT, () => { console.log('Servidor escuchando en http://localhost:' + PORT); })
    } catch (error) {
      console.log('Ha ocurrido un error: ', error)
    }
  }

  main();