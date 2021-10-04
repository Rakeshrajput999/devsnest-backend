var express = require('express');
var router = express.Router();
var registerchecks = require("../middlewares/registerchecks")
var {register,registerSuperAdmin} =require("../controller/register");
const check = require('../middlewares/CheckSuperAdmin');

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess =req.session 
  sess.username ="rakesh"
  res.render('index', { title: 'Express' });
});

// get session from redis
router.get("/test", function (req, res, next) {
  console.log(req.session.username);
  res.send(req.session.username);
});
/**
 * @requires {email,firstname,lastname,password,confirmPassword} -req.body
 * @description 
 * 1
 * security , performance ,edgecases 
 * emailvalidation 
 * password validation 
 * password ===confirmPassword
 * 2
 * js /sql injection
 * 3
 * check if email already exists 
 * password hasing 
 * email lowercase 
 * save 
 */
// to post 
router.post("/register",registerchecks,register )
router.post("/register-super-admin", registerchecks,check,registerSuperAdmin);
router.get ("/",)
module.exports = router;
