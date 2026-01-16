const Emergency = require("../models/Emergency");

// CREATE EMERGENCY REQUEST
exports.createEmergency = async (req, res) => {
  try {
    const { latitude, longitude, description } = req.body;

    const emergency = await Emergency.create({
      patient: req.user.id,
      location: { latitude, longitude },
      description,
    });

    res.status(201).json({
      message: "Emergency request sent",
      emergency,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN / HOSPITAL VIEW EMERGENCIES
exports.getEmergencies = async (req, res) => {
  const emergencies = await Emergency.find()
    .populate("patient", "name email");
  res.json(emergencies);
};
