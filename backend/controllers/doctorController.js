
const PatientHistory = require('../models/Patienthistory');
const Notification = require('../models/Notification');
const Appointment = require('../models/Appointment');


// Dashboard data
exports.getDashboard = async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.doctor.id });
    const notifications = await Notification.find({ doctorId: req.doctor.id, read: false });
    res.json({ appointments, notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.doctor.id });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Accept appointment
exports.acceptAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    await Appointment.findByIdAndUpdate(req.params.id, { status: 'confirmed' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reject appointment
exports.rejectAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    await Appointment.findByIdAndUpdate(req.params.id, { status: 'rejected' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Patient history ⭐ MOST IMPORTANT
exports.getPatientHistory = async (req, res) => {
  try {
    const history = await PatientHistory.findOne({ patientId: req.params.patientId });
    res.json(history || {
      allergies: 'None recorded',
      chronicDiseases: 'None',
      prescriptions: []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Save consultation notes
exports.saveNotes = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    // Assuming req.body.notes is a string or object; add validation if needed
    await Appointment.findByIdAndUpdate(req.params.id, { 
      notes: req.body.notes || req.body // Adjust based on expected structure
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Analytics (dummy data for now)
exports.getAnalytics = async (req, res) => {
  res.json({
    avgConsultationTime: '24 min',
    patientSatisfaction: 4.6,
    repeatPatients: '60%',
    totalConsultations: 127
  });
};
