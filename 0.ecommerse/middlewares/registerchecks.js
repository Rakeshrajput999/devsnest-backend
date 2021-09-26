/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * emailvalidation
 * password validation
 * password ===confirmPassword
 */

const {
  emailValidate,
  passwordValidate,
} = require("../utils/emailvalidate.js");
const registerchecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length != 0 &&
    password.length >= 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("authentication error");
  }
};
module.exports = registerchecks;
