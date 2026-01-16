export default function Emergency() {
  return (
    <div className="min-h-screen bg-red-600 p-8 text-white">
      
      <h1 className="text-4xl font-bold mb-4">🚨 Emergency Mode</h1>
      <p className="mb-8 text-lg">
        Stay calm. Help is on the way.
      </p>

      <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-2">Nearest Hospital</h2>
        <p>🏥 City Care Hospital</p>
        <p>📍 2.3 km away</p>

        <a
          href="https://www.google.com/maps/search/nearest+hospital"
          target="_blank"
          className="inline-block mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-bold"
        >
          Open in Google Maps
        </a>
      </div>

      <button className="bg-black px-8 py-4 rounded-full text-xl font-bold">
        📞 Call Ambulance
      </button>

    </div>
  );
}
