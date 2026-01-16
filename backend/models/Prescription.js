const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medicines: [
      {
        name: String,
        dosage: String,
        frequency: String, // e.g. 1-0-1
        duration: String, // e.g. 5 days
        timing: [String], // morning, afternoon, night
      },
    ],
    notes: String,
    startDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", PrescriptionSchema);
