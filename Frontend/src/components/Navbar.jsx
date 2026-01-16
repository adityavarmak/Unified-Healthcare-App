import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showNotify, setShowNotify] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mb-8 text-white">
      
      <h1 className="text-2xl font-bold">
        Patient Dashboard
      </h1>

      <div className="flex items-center gap-4 relative">
        
        {/* 🔔 Notification */}
        <button
          onClick={() => setShowNotify(!showNotify)}
          className="text-xl"
        >
          🔔
        </button>

        {showNotify && (
          <div className="absolute top-12 right-20 bg-white text-black p-4 rounded-xl shadow-lg w-56">
            <p className="font-semibold mb-2">Notifications</p>
            <p className="text-sm">💊 Take BP Tablet at 9:00 PM</p>
            <p className="text-sm mt-1">📅 Appointment today at 5:30 PM</p>
          </div>
        )}

        {/* 🚪 Logout */}
        <button
          onClick={handleLogout}
          className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

