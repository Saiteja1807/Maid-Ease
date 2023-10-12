const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const StateDetails = sequelize.define('StateDetails', {
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StateName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'StateDetails',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = StateDetails;