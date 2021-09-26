/**
 * here we import database connectivity code 
 */



const {DataTypes } =require("sequelize")
const seq =require("../database/index")


const User = seq.define("User", {
  fullname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
});


module.exports =User