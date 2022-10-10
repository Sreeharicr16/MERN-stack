const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
// const { validateToken } = require("../middlewares/validateToken");

const AuthController = require("../controller/user.controller");

router.post("/signUp", cleanBody, AuthController.Signup);

router.patch("/activate", cleanBody, AuthController.Activate);

router.post("/login", cleanBody, AuthController.Login);

router.patch("/forgot", cleanBody, AuthController.ForgotPassword);

router.patch("/reset", cleanBody, AuthController.ResetPassword);


router.get("/logout", AuthController.Logout);

router.get("/find", AuthController.Find);
// router.get("/referred", AuthController.ReferredAccounts);



module.exports = router;