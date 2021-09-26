/**
 * in this section we connect to data base 
 * 
 * then this code is export to model section where we create table structure 
 */


const { Sequelize } = require("sequelize");
const User = require("../models/User")

const seq = new Sequelize("postgres", "postgres", "12345", {host :"localhost",dialect:"postgres"});

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
