const mongoose    = require("mongoose")
const schema = mongoose.Schema


const UserSchema =new  schema({
    fullname : {type:String ,default:""},
    email:{type :String, default:""},
    password:{type:String,default:""}




}

)
module.exports = User =mongoose.model('User',UserSchema);