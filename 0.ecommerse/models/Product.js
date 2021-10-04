const { DataTypes } = require("sequelize/types");

module.exports= sequelize.define("product",{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKeys:true,
        autoIncreament:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false 
    }
,
price:{type:DataTypes.INTEGER,
allowNull:false
},
count:{
    type:DataTypes.INTEGER,
    allowNull:false 
},
description:{
    type:DataTypes.TEXT
},
image:{
    type:DataTypes.STRING
}
})