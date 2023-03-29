import Sequelize from 'sequelize';

export const sequelize = new Sequelize('portafolio_m7', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres'
})