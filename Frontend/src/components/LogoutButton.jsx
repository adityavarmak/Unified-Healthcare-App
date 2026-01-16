import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600"
    >
      Logout
    </button>
  );
}
