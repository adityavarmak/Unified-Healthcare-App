export default function Notification({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg text-white shadow-lg transition ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}
