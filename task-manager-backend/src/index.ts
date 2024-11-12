import sequelize from './config/database';

await sequelize.sync({ force: false });
console.log('Tables was synchronized');
