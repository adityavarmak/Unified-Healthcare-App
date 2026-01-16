import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaHeartbeat } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("");
  const [doctorCode, setDoctorCode] = useState("");
  const [error, setError] = useState("");

  const DOCTOR_SECRET = "DOC123";

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setDoctorCode("");
    setError("");
  };

  const handleLogin = () => {
    setError("");

    // 🔴 Role validation
    if (!role) {
      setError("Please select a role to continue");
      return;
    }

    // 🩺 Doctor validation
    if (role === "doctor") {
      if (!doctorCode.trim()) {
        setError("Doctor code is required");
        return;
      }

      if (doctorCode !== DOCTOR_SECRET) {
        setError("Invalid doctor access code");
        return;
      }

      // ✅ Doctor login success
      login("doctor");
      navigate("/doctor");
      return;
    }

    // 👤 Patient login
    if (role === "patient") {
      login("patient");
      navigate("/patient");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 px-6">
      <div className="grid md:grid-cols-2 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden">

        {/* LEFT PANEL */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white">
          <FaHeartbeat className="text-6xl mb-6 text-pink-300" />
          <h1 className="text-4xl font-bold mb-4">
            Caring Beyond Technology
          </h1>
          <p className="text-lg opacity-90 mb-6">
            “Where AI meets compassion to save lives and simplify healthcare.”
          </p>
          <p className="text-sm opacity-80">
            Secure • Fast • Reliable • Human-centric
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-10">
          <div className="text-center mb-6">
            <FaUserMd className="text-5xl text-indigo-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-indigo-700">
              Login
            </h2>
            <p className="text-gray-500 text-sm">
              Access your healthcare dashboard
            </p>
          </div>

          {/* Role Selection */}
          <select
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="">Select Role</option>
            <option value="patient">👤 Patient</option>
            <option value="doctor">👨‍⚕️ Doctor</option>
          </select>

          {/* Doctor Code */}
          {role === "doctor" && (
            <input
              type="password"
              placeholder="Enter Doctor Code"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
              value={doctorCode}
              onChange={(e) => setDoctorCode(e.target.value)}
            />
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center bg-red-50 p-3 rounded-lg">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-[1.02]"
          >
            {role === "doctor"
              ? "🔐 Verify & Login"
              : "🚀 Enter Dashboard"}
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Your data is protected with end-to-end security
          </p>
        </div>
      </div>
    </div>
  );
}



