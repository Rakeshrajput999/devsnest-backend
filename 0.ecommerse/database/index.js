/**
 * in this section we connect to data base 
 * 
 * then this code is export to model section where we create table structure 
 */
const {sequelize_database,sequelize_dialect,sequelize_host,sequelize_password,sequelize_username} =require("../config/index")

const { Sequelize } = require("sequelize");
const User = require("../models/User")

const seq = new Sequelize(sequelize_database,sequelize_username,sequelize_password, {host :sequelize_host,dialect:sequelize_dialect});

// seq.sync({force:true,logging:true})
(async()=>{
    //  await seq.sync({ force: true, logging: false });
    try {
        await seq.authenticate()
        console.log("connection esteblished with db")
    } catch (err) {
        console.error("unable to connect");
        
    }
})()

module.exports =seq
