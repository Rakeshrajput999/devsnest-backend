const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path of 'public' folder))

app.get("/", (req, res) => {
  res.status(200).send("hello");
});
app.get("/users/:userid/book/:bookid", (req, res) => {
  res.status(200).send(req.params.userid);
});

app.get("/sign",(req,res)=>{
    res.send(req.query)
})
app.listen(3003, () => {
  console.log("connected");
});
