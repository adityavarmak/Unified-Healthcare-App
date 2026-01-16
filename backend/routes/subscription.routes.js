const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const { createSubscription } = require("../controllers/subscription.controller");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("doctor"),
  createSubscription
);

module.exports = router;
