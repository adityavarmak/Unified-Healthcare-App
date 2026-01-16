export default function DoctorCard({ name, specialty, experience }) {
  return (
    <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-1">👨‍⚕️ {name}</h3>
      <p className="opacity-90">{specialty}</p>
      <p className="opacity-80 mb-4">{experience} years experience</p>

      <button className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold">
        Book Appointment
      </button>
    </div>
  );
}
