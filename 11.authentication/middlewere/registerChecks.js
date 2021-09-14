const {
  emailValidate,
  passwordValidate,
} = require("../utils/emailValidate.js");
const registerInitialChecks = (res, req, next) => {
  const { email, password, confirmPassword } = res.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("initial checks fail");
  }
};

module.exports = registerInitialChecks;