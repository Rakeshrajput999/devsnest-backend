/**
 * 
 * @param {} req 
 * @param {*} res 
 * stage third 
 * here need to connect dataabase 
 * which helps to check or store data in data base 
 * inthird stage thee folder take particippate
 * 1.databse/index
 * 2.model/User.js
 * 3controller/registe.js
 */

var User =require("../models/User")
// var User = require("../models/User.js");
var bcrypt =require("bcrypt")



var register =async (req,res)=>{
    const {fullname,email,password ,role}=req.body

      try {
          const alreadyexist = await User.findOne({where:{email}}).exec()
          if(alreadyexist){
              res.status(401).send("email already in use ")
          }else{
              const salt=bcrypt.genSaltSync(10)
              const hash= bcrypt.hashSync(password,salt)

              const newUser =new User ({email: email.toLowerCase(),password:hash,fullname:fullname})
              const saveUser = await newUser.save()
              res.status(201).send(saveUser)


          }
          
      } catch (error) {
       console.error(error);
       res.status(500).send("user can't login")   
      }

}



var registerSuperAdmin =async (req,res)=>{
    const {fullname,email,password}=req.body

      try {
          const alreadyexist = await User.findOne({where:{email}}).exec()
          if(alreadyexist){
              res.status(401).send("email already in use ")
          }else{
              const salt=bcrypt.genSaltSync(10)
              const hash= bcrypt.hashSync(password,salt)

              const newUser =new User ({email: email.toLowerCase(),password:hash,fullname:fullname,role:role})
              const saveUser = await newUser.save()
              req.session.User =saveUser
              res.status(201).send(saveUser)


          }
          
      } catch (error) {
       console.error(error);
       res.status(500).send("user can't login")   
      }

}
module.exports= {register,registerSuperAdmin}