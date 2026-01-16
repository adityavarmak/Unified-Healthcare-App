const Prescription = require("../models/Prescription");

// Doctor creates prescription
exports.createPrescription = async (req, res) => {
  try {
    const { patientId, medicines, notes } = req.body;

    const prescription = await Prescription.create({
      patient: patientId,
      doctor: req.user.id,
      medicines,
      notes,
    });

    res.status(201).json({
      message: "Prescription created",
      prescription,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Patient views prescriptions
exports.getMyPrescriptions = async (req, res) => {
  const prescriptions = await Prescription.find({
    patient: req.user.id,
  }).populate("doctor", "name specialization");

  res.json(prescriptions);
};
