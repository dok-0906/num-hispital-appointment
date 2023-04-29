const express = require("express");
const { protect } = require("../../user/middleware/protect");
const {
  getServices, 
  getService, 
  createService,
  updateService,
  deleteService
} = require("../controler/controller");

const router = express.Router();
router.route('/')
  .get(getServices)
  .post(protect, createService);
router.route("/:id")
  .get(getService)
  .put(protect, updateService)
  .delete(protect, deleteService);
module.exports = router;
