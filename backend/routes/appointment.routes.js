const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
  createAppointment,
  getMyAppointments,
} = require("../controllers/appointment.controller");

// Patient books appointment
router.post(
  "/",
  authMiddleware,
  roleMiddleware("patient"),
  createAppointment
);

// Patient views appointments
router.get(
  "/my",
  authMiddleware,
  roleMiddleware("patient"),
  getMyAppointments
);

module.exports = router;
