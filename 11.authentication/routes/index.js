var express = require('express');
var router = express.Router();


//////////////////////////////////////////
var registerInitialChecks =require("../middlewere/registerChecks")
var register =require("../controllers/register")
/*

* @requires {email firstname lasrname ,password confirmpassword} 

*security ,performance and edge cases 
level 1
*emailvalidation - string 
*password validation
password===confirm password
level-2
*js/ sql - injection THA
level-3
*check if email alredy exists
*password hashing
*email lowercase conversion 
*save 

*/
/////////////////////////////////////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess=req.session
  sess.username ="rakesh"
  res.render('index', { title: 'Express' });
});
/////////////////////////////////
router.post('/register ',registerInitialChecks ,register)

module.exports = router;
