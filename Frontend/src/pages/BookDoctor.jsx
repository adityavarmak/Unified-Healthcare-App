import DoctorCard from "../components/DoctorCard";

export default function BookDoctor() {
  const doctors = [
    { name: "Dr. Aditya", specialty: "Cardiologist", experience: 10 },
    { name: "Dr. Sunder", specialty: "Dermatologist", experience: 7 },
    { name: "Dr. Ebenezer", specialty: "Orthopedic", experience: 12 },
    { name: "Dr. Sanjay", specialty: "Pediatrician", experience: 5 },
    { name: "Dr. Ramaswamy", specialty: "Gynecologist", experience: 8 },
    { name: "Dr. Raghu", specialty: "Neurologist", experience: 15 },
    { name: "Dr. Deeraj", specialty: "ENT Specialist", experience: 9 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Book a Doctor</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            specialty={doc.specialty}
            experience={doc.experience}
          />
        ))}
      </div>
    </div>
  );
}
