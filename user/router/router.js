const express = require("express");
const { protect, authorize} = require("../middleware/protect");
const {
  getUsers, 
  getUser, 
  register,
  login,
  updateUser,
  deleteUser,
  getuserid
} = require("../controler/controller");

const router = express.Router();
router.route('/')
  .get(protect, getUsers)
  .post(register);getuserid
  router.route('/login')
  .post(login);
  router.route('/getuserid')
  .get(protect, getuserid);
router.route("/:id")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
module.exports = router;