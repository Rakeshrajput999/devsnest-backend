const { Sequelize } = require("sequelize");

// sequelize is orm
const sequelize = new Sequelize("postgres", "postgres","12345", {
  host: "localhost",dialect: "postgres"
});


sequelize.sync()



const auth = async () =>{
   try {
       await sequelize.authenticate()
       console.log("connection esteblished");
   }catch {(err)=>{
       console.log("unable to connect");
   }
}}
auth()
module.exports = sequelize