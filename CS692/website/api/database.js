const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'database-1.cwvjonlr9qap.us-east-2.rds.amazonaws.com',
    database: 'maid_ease',
    username: 'root',
    password: 'MaidEase#99',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the MySQL server.');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

module.exports = sequelize;
