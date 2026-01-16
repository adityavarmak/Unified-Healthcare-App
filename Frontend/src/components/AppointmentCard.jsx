export default function AppointmentCard() {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl text-white">
      <h2 className="text-lg font-semibold mb-3">Upcoming Appointment</h2>
      <p>👨‍⚕️ Dr. Rahul (Cardiologist)</p>
      <p>📅 Today, 5:30 PM</p>

      <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full">
        Join Consultation
      </button>
    </div>
  );
}
