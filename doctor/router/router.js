const express = require("express");
const {
  getDoctors, 
  getDoctor, 
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require("../controler/controller");

const router = express.Router();
router.route('/')
  .get(getDoctors)
  .post(createDoctor);
router.route("/:id")
  .get(getDoctor)
  .put(updateDoctor)
  .delete(deleteDoctor);
module.exports = router;
