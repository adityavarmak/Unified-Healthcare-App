const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
  createEmergency,
  getEmergencies,
} = require("../controllers/emergency.controller");

// Patient triggers emergency
router.post(
  "/",
  authMiddleware,
  roleMiddleware("patient"),
  createEmergency
);

// Admin / Hospital views emergencies
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getEmergencies
);

module.exports = router;
