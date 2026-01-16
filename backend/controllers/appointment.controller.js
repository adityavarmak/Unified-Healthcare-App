const Appointment = require("../models/Appointment");
const symptomToSpecialist = require("../utils/symptomMapper");

// CREATE APPOINTMENT
exports.createAppointment = async (req, res) => {
  try {
    const { symptoms, date } = req.body;

    const specialist = symptomToSpecialist(symptoms);
    const isEmergency =
      symptoms.toLowerCase().includes("chest pain") ||
      symptoms.toLowerCase().includes("unconscious");

    // TEMP: Assign first available doctor (demo)
    const doctorId = req.body.doctorId;

    const appointment = await Appointment.create({
      patient: req.user.id,
      doctor: doctorId,
      symptoms,
      specialist,
      date,
      isEmergency,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET PATIENT APPOINTMENTS
exports.getMyAppointments = async (req, res) => {
  const appointments = await Appointment.find({ patient: req.user.id })
    .populate("doctor", "name email");
  res.json(appointments);
};
