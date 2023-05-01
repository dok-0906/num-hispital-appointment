const express = require("express");
const { protect } = require("../middleware/protect");
const {
  getAppointments, 
  getAppointment, 
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getUserAppointments,
  getisAppointments
} = require("../controller/controller");

const router = express.Router();
router.route('/is_app').get(protect, getisAppointments);
router.route("/getUser")
  .get(protect, getUserAppointments);
router.route('/')
  .get(protect, getAppointments)
  .post(createAppointment);
router.route("/:id")
  .get(protect, getAppointment)
  .put(updateAppointment)
  .delete(protect, deleteAppointment);

module.exports = router;
