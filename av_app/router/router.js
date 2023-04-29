const express = require("express");
const { protect } = require("../../user/middleware/protect");
const {
  getAvAppointments, 
  getAvAppointment, 
  createAvAppointment,
  updateAvAppointment,
  deleteAvAppointment,
  getisApp
} = require("../controller/controller");

const router = express.Router();
router.route('/is_app').get(protect, getisApp);
router.route('/')
  .get( getAvAppointments)
  .post(protect, createAvAppointment);
router.route("/:id")
  .get(getAvAppointment)
  .put(updateAvAppointment)
  .delete(protect, deleteAvAppointment);

module.exports = router;
