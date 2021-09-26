var express = require('express');
var router = express.Router();

const pool = require("../database/ppostgress")

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users"', (err,result)=>{if (err){throw err 
    
  } else {
    res.status(200).json(result)
    
  }})
});

module.exports = router;
