const express= require("express")
const app = express()
const bodyParser =require("body-parser")


// middle ware 
const check =(req, res, next) => {
    if (req.query.admin === "true") {
      next();
    } else {
      res.status(400).send("should be admin");
    }
  }
//  this two line help to send fron frontend input and get in front end output
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// if want to add a function to all use aap.use  ( function )this function appied to all
// we use middle ware for permission autherization or for any checks
// moiddle ware doesnt contain res.send line of code
app.get("/",(req,res,next)=>{
    console.log("hello from home")
    next()
},(req,res)=>{
    res.send ("hello from second")
})
app.get("/admin", (req,res,next)=>{
    if (req.query.admin === "true"){
        next()
    }else{
        res.status(400).send("should be admin")
    }
}, (req,res)=>{
    res.send("i am admin")
})

app.get(
  "/admin2",check
  ,
  (req, res) => {
    res.send("i am admin2");
  }
);
app.post("/login",(req,res)=>{
    console.log("body->",req.body);
    res.json({text:req.body})
})


app.listen(3000,()=>{
    console.log ("connected")
})