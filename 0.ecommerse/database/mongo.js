var mongoose =require("mongoose")

var mongodb ='mongodb://127.0.0.1/mymongo_database'

mongoose.connect(mongodb,{
    useNewUrlParser:true,useUnifiedTopology:true
})

var db = mongoose.connection 

db.on ('error',console.error.bind(console,"mongodb connection error"))
db.on ("connect",()=>{console.log("connected to mongo db");})

