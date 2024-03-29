/*check if email alredy exists
*password hashing
*email lowercase conversion 
*save 

*/
const bcrypt = require("bcrypt");
const User = require("../models/user")



const saltRounds = 10;
const register =async(req,res) =>{
    const {email ,password} =req.body
    try {
        const alreadyExist = await User.findOne({where :{email}})
        if (alreadyExist) {
            res.status(401).send('email already exist')
        } else {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = new User ({email:email.toLowerCase(),password:hash})
            const saveUser =await newUser.save()
            res.status(201).send("user register")
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('something went wrong')
    }
}
module.exports =register