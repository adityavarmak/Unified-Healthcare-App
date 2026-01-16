import { FaUserMd, FaAmbulance, FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-12 max-w-5xl w-full text-center text-white shadow-xl">
        
        <h1 className="text-4xl font-bold mb-2">
          AI Healthcare Platform
        </h1>
        <p className="text-lg mb-10 opacity-90">
          Smart • Fast • Life Saving
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white/20 rounded-xl p-6">
            <FaUserMd className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Doctor Booking</h3>
            <p className="text-sm opacity-80">
              AI-based doctor recommendation & instant appointments
            </p>
          </div>

          <div className="bg-white/20 rounded-xl p-6">
            <FaAmbulance className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Emergency Mode</h3>
            <p className="text-sm opacity-80">
              Find nearest hospitals & ambulance support instantly
            </p>
          </div>

          <div className="bg-white/20 rounded-xl p-6">
            <FaHeartbeat className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Health Tracking</h3>
            <p className="text-sm opacity-80">
              Monitor symptoms & medical history securely
            </p>
          </div>

        </div>

        {/* ✅ CORRECT BUTTON */}
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Started →
        </button>

      </div>
    </div>
  );
}

