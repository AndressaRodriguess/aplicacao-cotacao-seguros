const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/database");

class Usuario extends Model{};

Usuario.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { 
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    freezeTableName: false,
    timestamps: true
});

module.exports = Usuario;