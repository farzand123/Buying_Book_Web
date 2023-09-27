const express = require("express");
const {
  getAllUser,
  createUser,
  loginUser,
  deleteUsers,
  deleteUser,
  purchaseBook,
  myOwnedBooks,
} = require("../controller/user.controller");
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUsers", getAllUser);
router.post("/loginUser", loginUser);
router.post("/purchase", purchaseBook);

router.get("/purchased/:userId", myOwnedBooks);

router.delete("/deleteUsers", deleteUsers);
router.delete("/deleteUser", deleteUser);
module.exports = router;
