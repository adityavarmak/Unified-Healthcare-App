export default function MedicineCard() {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl text-white">
      <h2 className="text-lg font-semibold mb-3">Medicine Reminder</h2>
      <ul className="space-y-2">
        <li>💊 Paracetamol – 9:00 AM</li>
        <li>💊 Vitamin D – 2:00 PM</li>
        <li>💊 BP Tablet – 9:00 PM</li>
      </ul>

      <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full">
        View Prescription
      </button>
    </div>
  );
}
