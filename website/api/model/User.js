const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('mysql://root:September@2022@localhost:3306/TEST');
/*
'maid_ease' is the name of your database.
'root' is the username.
'jahid37094' is the password.
host: 'localhost' specifies the database host.
dialect: 'mysql' tells Sequelize to use MySQL.
port: 3306 is the default port for MySQL.

datatable structure
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    address1 VARCHAR(255) NOT NULL,
    address2 VARCHAR(255),  -- this can be NULL since it's optional
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,  -- 'UNIQUE' ensures that the email is unique for every user
    phoneNumber VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,  -- this will store the hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

*/
const User = sequelize.define('User', {
  firstName: {
      type: DataTypes.STRING,
      allowNull: false
  },
  lastName: {
      type: DataTypes.STRING,
      allowNull: false
  },
  address1: {
      type: DataTypes.STRING,
      allowNull: false
  },
  address2: {
      type: DataTypes.STRING,
  },
  city: {
      type: DataTypes.STRING,
      allowNull: false
  },
  state: {
      type: DataTypes.STRING,
      allowNull: false
  },
  country: {
      type: DataTypes.STRING,
      allowNull: false
  },
  zip: {
      type: DataTypes.STRING,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
    tableName: 'users',
    timestamps: false // Disables createdAt and updatedAt
  });

module.exports = User;
