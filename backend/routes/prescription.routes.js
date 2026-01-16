const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
  createPrescription,
  getMyPrescriptions,
} = require("../controllers/prescription.controller");

// Doctor issues prescription
router.post(
  "/",
  authMiddleware,
  roleMiddleware("doctor"),
  createPrescription
);

// Patient views own prescriptions
router.get(
  "/my",
  authMiddleware,
  roleMiddleware("patient"),
  getMyPrescriptions
);

module.exports = router;
