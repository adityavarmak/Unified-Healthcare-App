const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

// Protect all doctor routes
router.use(authMiddleware, roleMiddleware('doctor'));

// Routes
router.get('/dashboard', doctorController.getDashboard);
router.get('/appointments', doctorController.getAppointments);
router.put('/appointments/:id/accept', doctorController.acceptAppointment);
router.delete('/appointments/:id', doctorController.rejectAppointment);
router.get('/patients/:patientId/history', doctorController.getPatientHistory);
router.post('/appointments/:id/notes', doctorController.saveNotes);
router.get('/analytics', doctorController.getAnalytics);

module.exports = router;
