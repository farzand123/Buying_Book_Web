const express = require("express");
const {
  createAdmin,
  getAllAdmins,
  loginAdmin,
  deleteAdmin,
} = require("../controller/admin.controller");
const router = express.Router();

router.post("/createAdmin", createAdmin);
router.get("/getAdmins", getAllAdmins);
router.post("/loginAdmin", loginAdmin);
router.delete("/deleteAdmins", deleteAdmin);
module.exports = router;
