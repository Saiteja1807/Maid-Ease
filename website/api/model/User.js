const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
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
