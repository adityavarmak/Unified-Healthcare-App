// src/pages/PatientDashboard.jsx - COMPLETE PROFESSIONAL VERSION
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FaUser, FaSearch, FaCalendarCheck, FaVideo, FaFileMedical, 
  FaBell, FaUpload, FaStar, FaPhone, FaMapMarkerAlt, FaClock,
  FaExclamationTriangle, FaRobot, FaCheckCircle, FaTimesCircle,
  FaHeartbeat
} from 'react-icons/fa';

export default function PatientDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  // Patient Profile
  const [patient, setPatient] = useState({
    name: "K.Aditya varma",
    age: 20,
    gender: "MALE",
    phone: "+91 8179732466",
    allergies: "-",
    chronic: "Hypertension",
    Subscription: "Premium",
    TotalBills: "₹15,200",
    emergencyContact: "+91 9876543210",
    bloodGroup: "O+",
    height: "175 cm",
    weight: "58 kg"
  });

  // Today's Medicines with Adherence Tracker (NEW FEATURE 3)
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Aspirin 75mg", time: "Morning (8AM)", taken: true },
    { id: 2, name: "Metformin 500mg", time: "Afternoon (2PM)", taken: false },
    { id: 3, name: "Atenolol 50mg", time: "Evening (8PM)", taken: false }
  ]);

  // All existing data states
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Sunder", specialty: "Cardiology", location: "borepatla", fee: "₹800", rating: 4.9, available: true },
    { id: 2, name: "Dr. SanjayKonda", specialty: "Dentistry", location: "doultabad", fee: "₹600", rating: 4.7, available: false },
    { id: 3, name: "Dr. Ebenezer", specialty: "Dermatology", location: "sangareddy", fee: "₹700", rating: 4.8, available: true },
    { id: 4, name: "Dr. Ramaswamy", specialty: "Orthopedic", location: "sadashivpet", fee: "₹900", rating: 4.6, available: true },
    { id: 5, name: "Dr. Aditya", specialty: "Pediatrics", location: "pragathi nagar", fee: "₹899", rating: 4.9, available: false },
    { id: 6, name: "Dr. Raghu", specialty: "Gynecology", location: "nizampet", fee: "₹850", rating: 4.2, available: true },
    { id: 7, name: "Dr. Deeraj", specialty: "Neurology", location: "kurnool", fee: "₹950", rating: 4.5, available: true },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Sunder", date: "Jan 15, 10:30 AM", status: "confirmed", type: "Video" },
    { id: 2, doctor: "Dr. SanjayKonda", date: "Jan 20, 2:00 PM", status: "pending", type: "In-person" },
    { id: 5, doctor: "Dr. Aditya", date: "Jan 12, 11:00 AM", status: "completed", type: "Video" },
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: 1, doctor: "Dr. Sunder", date: "Jan 10", medicines: "Aspirin 75mg (M,N), Metformin 500mg(AN)" },
    { id: 2, doctor: "Dr. SanjayKonda", date: "Dec 25", medicines: "Cetirizine 10mg" },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Appointment with Dr. Sunder in 2 hours", time: "15 min ago", type: "reminder" },
    { id: 2, message: "Prescription updated by Dr. Sunder", time: "1 hr ago", type: "prescription" },
  ]);

  // NEW FEATURE 4: Health Timeline
  const [healthTimeline, setHealthTimeline] = useState([
    { id: 1, event: "Cardiology visit - Dr. Aditi", date: "Jan 15", type: "visit" },
    { id: 2, event: "BP report uploaded", date: "Jan 10", type: "report" },
    { id: 3, event: "Prescription updated", date: "Jan 05", type: "prescription" },
  ]);

  // Adherence calculation (NEW FEATURE 3)
  const adherencePercentage = Math.round((medicines.filter(m => m.taken).length / medicines.length) * 100);

  // Actions - ALL existing + NEW features
  const bookAppointment = (doctorId) => {
    alert(`Booking appointment with doctor ${doctors.find(d => d.id === doctorId)?.name}`);
  };

  const cancelAppointment = (id) => {
    setAppointments(prev => prev.map(appt => 
      appt.id === id ? { ...appt, status: 'cancelled' } : appt
    ));
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  // NEW FEATURE 1: Emergency Mode
  const Emergency = () => {
    alert("🚨 EMERGENCY MODE ACTIVATED!\n✅ Medical history shared\n✅ Nearest hospital: Apollo (2.3km)\n✅ Emergency contact alerted: Amit Mehta");
  };

  // NEW FEATURE 2: AI Recommended Booking
  const bookAIRecommended = () => {
    alert("🤖 AI Recommended: Booking Dr. Aditya (Cardiologist)\n✅ Slot confirmed for tomorrow 10AM");
  };

  // NEW FEATURE 5: Feedback
  const submitFeedback = (rating) => {
    alert(`⭐ Thanks for rating Dr. Aditi Sharma: ${rating}/5\n✅ Feedback saved!`);
  };

  // NEW FEATURE 3: Medicine toggle
  const toggleMedicine = (id) => {
    setMedicines(prev => prev.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      {/* Header with Emergency Button (UPDATED) */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaUser className="text-3xl text-white" />
          <div>
            <h1 className="text-2xl font-bold text-white">Patient Dashboard</h1>
            <p className="text-indigo-100 text-sm">Hello, {patient.name}!</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={Emergency}
            className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all flex items-center animate-pulse"
            
          >
            <FaExclamationTriangle className="mr-2" />
            🚨 EMERGENCY
          </button>
          <button className="bg-white/20 text-white px-4 py-2 rounded-xl backdrop-blur-sm hover:bg-white/30 transition">
            <FaUpload className="mr-2" /> Upload Report
          </button>
          <button 
            onClick={logout}
            className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* NEW 1️⃣ AI Health Assistant (TOP PRIORITY) */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl animate-fade-in">
          <div className="flex items-center mb-6">
            <FaRobot className="text-4xl mr-4 bg-white/20 p-3 rounded-2xl" />
            <div>
              <h2 className="text-3xl font-bold mb-1">🤖 AI Health Assistant</h2>
              <p className="opacity-90">Analyzing your health data...</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3">🔍 Detected Symptoms</h3>
              <ul className="space-y-2 text-lg">
                <li>• Chest pain (moderate)</li>
                <li>• BP history (hypertension)</li>
                <li>• Recent fatigue reports</li>
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3">🎯 AI Recommendation</h3>
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-4 rounded-xl mb-4">
                <p className="font-bold text-lg">Dr. Aditya - Cardiologist</p>
                <p className="text-sm opacity-90">98% match • Available tomorrow</p>
              </div>
              <button
                onClick={bookAIRecommended}
                className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold text-xl hover:bg-emerald-600 shadow-lg transform hover:scale-105 transition-all"
              >
                📅 Book Now (AI Recommended)
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards (Updated with Adherence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-[1.02] transition">
            <FaCalendarCheck className="text-3xl text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Upcoming Appointments</h3>
            <p className="text-3xl font-bold text-indigo-600">{appointments.filter(a => a.status === 'confirmed').length}</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition">
            <FaCheckCircle className="text-3xl mx-auto mb-4" />
            <h3 className="font-bold mb-2">Medicine Adherence</h3>
            <p className="text-3xl font-bold">{adherencePercentage}%</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-[1.02] transition">
            <FaFileMedical className="text-3xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Prescriptions</h3>
            <p className="text-3xl font-bold text-purple-600">{prescriptions.length}</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition">
            <FaBell className="text-3xl mx-auto mb-4" />
            <h3 className="font-bold mb-2">Notifications</h3>
            <p className="text-3xl font-bold">{notifications.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* NEW 3️⃣ Medicine Adherence Tracker */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaFileMedical className="mr-3 text-3xl" />
              💊 Today's Medicines
            </h2>
            <div className="space-y-4">
              {medicines.map((medicine) => (
                <div key={medicine.id} className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-xl rounded-2xl">
                  <div>
                    <h3 className="font-bold text-lg">{medicine.name}</h3>
                    <p className="text-sm opacity-90">{medicine.time}</p>
                  </div>
                  <button
                    onClick={() => toggleMedicine(medicine.id)}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                      medicine.taken 
                        ? 'bg-green-400 text-white scale-110' 
                        : 'bg-gray-300 hover:bg-green-400 hover:text-white'
                    }`}
                  >
                    {medicine.taken ? <FaCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
                  </button>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-white/30 text-center">
                <p className="text-2xl font-bold">Adherence: {adherencePercentage}%</p>
                <p className="text-sm opacity-90 mt-1">Great job! Keep it up 👏</p>
              </div>
            </div>
          </div>

          {/* NEW 4️⃣ Health Timeline */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaHeartbeat className="mr-3 text-red-500" />
              🕒 Health Timeline
            </h2>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {healthTimeline.map((event) => (
                <div key={event.id} className="flex items-center p-4 hover:bg-gray-50 rounded-xl cursor-pointer transition">
                  <div className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 ${
                    event.type === 'visit' ? 'bg-emerald-500' : 
                    event.type === 'report' ? 'bg-blue-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{event.event}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ALL Original Features Preserved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor Search & Discovery (ORIGINAL) */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaSearch className="mr-3 text-indigo-500" />
              Find Doctors
            </h2>
            <div className="flex mb-6 gap-3 flex-wrap">
              <select className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Cardiology</option>
                <option>Dentistry</option>
                <option>Dermatology</option>
              </select>
              <input 
                placeholder="Enter location" 
                className="flex-1 border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700">
                Search
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="flex items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <FaUser className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800">{doctor.name}</h3>
                    <p className="text-indigo-600 font-semibold">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">{doctor.location} • {doctor.fee}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(doctor.rating) ? 'fill-current' : ''} />
                        ))}
                      </div>
                      <span className="ml-1 font-bold text-gray-700">({doctor.rating})</span>
                    </div>
                    <button 
                      onClick={() => bookAppointment(doctor.id)}
                      disabled={!doctor.available}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition flex items-center"
                    >
                      {doctor.available ? 'Book Now' : 'Unavailable'}
                      <FaClock className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Appointments (ORIGINAL) */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaCalendarCheck className="mr-3 text-emerald-500" />
              My Appointments
            </h2>
            <div className="space-y-4">
              {appointments.map((appt) => (
                <div key={appt.id} className="p-6 rounded-2xl border-l-4 flex items-center justify-between" style={{ 
                  borderLeftColor: appt.status === 'confirmed' ? '#10b981' : appt.status === 'pending' ? '#f59e0b' : '#ef4444'
                }}>
                  <div>
                    <h3 className="font-bold text-xl">{appt.doctor}</h3>
                    <p className="text-gray-600">{appt.date} • {appt.type}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      appt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                      appt.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {appt.status.toUpperCase()}
                    </span>
                    
                    {appt.status !== 'cancelled' && (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => appt.status === 'confirmed' ? alert('Start consultation') : null}
                          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600"
                        >
                          {appt.status === 'confirmed' ? 'Start Call' : 'View'}
                        </button>
                        {appt.status !== 'confirmed' && (
                          <button 
                            onClick={() => cancelAppointment(appt.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-red-600"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Management (ORIGINAL) */}
          <div className="lg:col-span-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaUser className="mr-3" />
              My Profile
            </h2>
            <div className="space-y-4 text-lg">
              <div><span className="font-semibold">Name:</span> {patient.name}</div>
              <div><span className="font-semibold">Age:</span> {patient.age} • {patient.gender}</div>
              <div><span className="font-semibold">Phone:</span> {patient.phone}</div>
              <div><span className="font-semibold">Allergies:</span> {patient.allergies}</div>
              <div><span className="font-semibold">Chronic:</span> {patient.chronic}</div>
              <div><span className='font-semibold'>Subscription:</span> {patient.Subscription}</div>
              <div><span className='font-semibold'>height:</span> {patient.height}</div>
              <div><span className='font-semibold'>weight:</span> {patient.weight}</div>
              <div><span className='font-semibold'>bloodGroup:</span> {patient.bloodGroup}</div>
              <div className="flex items-center pt-4 border-t border-white/30">
                <FaPhone className="mr-2 text-2xl" />
                <span className="font-semibold">Emergency:</span> {patient.emergencyContact}
              </div>
            </div>
          </div>

          {/* Prescriptions & Notifications (ORIGINAL) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Prescriptions */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaFileMedical className="mr-3" />
                Prescriptions
              </h2>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {prescriptions.slice(0, 2).map((prescription) => (
                  <div key={prescription.id} className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                    <p className="font-semibold">{prescription.doctor}</p>
                    <p className="text-sm opacity-90">{prescription.date}</p>
                    <p className="text-sm mt-1">{prescription.medicines}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-xl border border-white/50">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBell className="mr-3 text-orange-500" />
                Notifications
              </h2>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl cursor-pointer hover:shadow-md transition" onClick={() => markNotificationRead(notif.id)}>
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      notif.type === 'reminder' ? 'bg-blue-500 animate-pulse' : 'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NEW 5️⃣ Feedback & Ratings */}
        {appointments.some(a => a.status === 'completed') && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaStar className="mr-3 text-3xl" />
              ⭐ Rate Your Doctor
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center mb-6">
                {[1,2,3,4,5].map((star) => (
                  <FaStar 
                    key={star} 
                    className="text-4xl mx-1 cursor-pointer hover:scale-110 transition-all text-yellow-300"
                    onClick={() => submitFeedback(star)}
                  />
                ))}
              </div>
              <textarea 
                placeholder="Write your review (optional)..."
                className="w-full p-4 rounded-2xl bg-white/20 backdrop-blur-xl text-white placeholder-white/70 resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-white/50"
                rows="3"
              />
              <button className="w-full bg-white text-yellow-600 py-4 rounded-2xl font-bold text-xl hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all">
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}