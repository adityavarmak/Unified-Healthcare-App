import { useNavigate } from "react-router-dom";

export default function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex gap-6">
      <button
        onClick={() => navigate("/BookDoctor")}
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:scale-105 transition"
      >
        Book Doctor
      </button>

      <button
        onClick={() => navigate("/Emergency")}
        className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition"
      >
        Emergency 🚑
      </button>
    </div>
  );
}


