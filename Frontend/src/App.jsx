import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/patient"
        element={
          <ProtectedRoute allowedRole="patient">
            <Patient />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor"
        element={
          <ProtectedRoute allowedRole="doctor">
            <Doctor />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

