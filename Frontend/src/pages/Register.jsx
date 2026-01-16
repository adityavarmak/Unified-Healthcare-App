export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md text-white">

        <h2 className="text-4xl font-bold text-center mb-6">Register</h2>

        <select className="w-full p-3 rounded-lg bg-white/30 mb-4 text-white outline-none">
          <option className="text-black">Patient</option>
          <option className="text-black">Doctor</option>
        </select>

        <input placeholder="Name" className="input" />
        <input placeholder="Email" className="input" />
        <input placeholder="Password" type="password" className="input" />

        <button className="w-full bg-white text-indigo-700 font-bold py-3 rounded-full mt-4">
          Create Account
        </button>
      </div>
    </div>
  );
}
