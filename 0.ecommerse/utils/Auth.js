const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/mongo");
const { SECRET } = require("../config/index");

const userRegister = async (userDets, role, res) => {
  // validate user
  try {
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        massage: "Username is already exist",
        success: false,
      });
    }

    // validate email
    let emailNotRegisterd = await validateEmail(userDets.email);
    if (!emailNotRegisterd) {
      return res.status(400).json({
        message: "email already exist ",
        success: false,
      });
    }

    const password = await bcrypt.hash(userDets.password, 12);
    const newUser = new User({
      ...userDets,
      password,
      role,
    });

    await newUser.save();
    returnres.status(201).json({
      massaage: "huerry now you are registered",
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "unable to create you account",
      success: false,
      err: err,
    });
  }
};

const userLogin = async (userCreds, role, res) => {
  try {
    let { username, password } = userCreds;
    // first check if the username is in the database

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        massage: "Username is not found Invalid credential",
        sucess: false,
      });
    }

    //  we will check the role
    if (user.role != role) {
      return res.status(403).json({
        message: "please make sure you are logging the right ",
        sucess: false,
      });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          user_id: user._id,
          role: user.role,
          username: user.username,
          email: user.email,
        },
        SECRET,
        {
          expiresIn: "7 days",
        }
      );
      let result ={
          username:user.username,
          role:user.role,
          email:user.email,
          token:`Bearer ${token}`,
          expiresIn:168
      }
      return res.status(200).json({
        ...result,
        message:"You are now logged in ",
        success:true
      })
    }else{
        return res.status(403).json({
            message:"Incorrect password",
            success:false
        })
    }



  } catch (err) {console.log(err)}
};

const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = (roles) => (req, res, next) => {
  if (roles.includes(req.body.role)) {
    next();
  } else {
    res.status(401).json("Unathorised");
  }
};

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const serializeUser = (user) => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
  };
};

module.exports = {
  userAuth,
  checkRole,
  userLogin,
  userRegister,
  serializeUser,
};
