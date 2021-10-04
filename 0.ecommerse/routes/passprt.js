const router = require("express").Router();

const { userAuth, userLogin, checkRole, userRegister, serializeUser } =
  require("../utils/Auth");

// Users registration

router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// admin regisration

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// super Admin Route

router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

// userlogin

router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

// admin login
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

// super-admin login
router.post("/login-super-admin", async (req, res) => {
  await userLogin(req.body, "superadmin", res);
});

// profileroute
router.get("/", async (req, res) => {
  await userLogin(req.body, "", res);
});
// user protected Route

router.get("/profile", async (req, res) => {
  return res.json(serializeUser(req.user));
});

//
router.get(
  "/user-protected",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("hello user");
  }
);

router.get(
  "/admin-protected",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("hello user");
  }
);

router.get(
  "/super-admin-protected",
  userAuth,
  checkRole(["superadmin"]),
  async (req, res) => {
    return res.json("hello user");
  }
);

router.get("/", async (req, res) => {
  await userLogin(req.body, "", res);
});


module.exports = router;