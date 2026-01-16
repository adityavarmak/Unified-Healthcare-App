import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE = 'http://localhost:5000/api';
const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

// Add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const doctorAPI = {
  getDashboard: () => api.get('/doctor/dashboard'),
  getAppointments: () => api.get('/doctor/appointments'),
  acceptAppointment: (id) => api.put(`/doctor/appointments/${id}/accept`),
  rejectAppointment: (id) => api.delete(`/doctor/appointments/${id}`),
  getPatientHistory: (patientId) => api.get(`/doctor/patients/${patientId}/history`),
  saveNotes: (apptId, notes) => api.post(`/doctor/appointments/${apptId}/notes`, notes),
  getNotifications: () => api.get('/doctor/notifications'),
  markNotificationRead: (id) => api.put(`/doctor/notifications/${id}/read`),
  getAnalytics: () => api.get('/doctor/analytics')
};
