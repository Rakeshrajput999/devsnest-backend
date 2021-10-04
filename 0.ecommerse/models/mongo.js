const mongoose =require("mongoose")
const Schema= mongoose.Schema 

// const UserSchema = new Schema ({
//     fullname :{type:String,default:''},
//     email :{type:String,default:''},
//     password :{type:String,default:''}
// })





// day14


const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports= User = mongoose.model("User",UserSchema)