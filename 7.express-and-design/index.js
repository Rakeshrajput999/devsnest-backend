const express =require("express")
const path = require("path");

const app =express()

app.use( express.static(path.join(__dirname, "public")));
// app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.status(200).send("hello")
})

app.listen(3003,()=>{
    console.log("connected")
})