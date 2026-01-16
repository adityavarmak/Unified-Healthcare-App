const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientHistorySchema = new Schema({
  patientId: { type: String, required: true },
  patientName: String,
  allergies: String,
  chronicDiseases: String,
  prescriptions: [String]
});

module.exports = mongoose.model('PatientHistory', patientHistorySchema);
