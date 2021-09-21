var express = require('express');
const { Pool } = require('pg');
var router = express.Router();
require("../models/postgr")

/* GET users listing. */
router.get('/', function(req, res, next) {
  Pool.query('SELECT *FROM "User"',(err,result)=>{
    if(err){
      throw err;
    }
    res.status(200).json(result)
  })
  res.send('respond with a resource');
});

module.exports = router;
