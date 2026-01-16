const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      latitude: String,
      longitude: String,
    },
    description: {
      type: String,
      default: "Medical Emergency",
    },
    status: {
      type: String,
      enum: ["requested", "responding", "resolved"],
      default: "requested",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Emergency", EmergencySchema);
