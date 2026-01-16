const symptomToSpecialist = (symptoms) => {
  symptoms = symptoms.toLowerCase();

  if (symptoms.includes("chest pain") || symptoms.includes("heart")) {
    return "Cardiologist";
  }
  if (symptoms.includes("fever") || symptoms.includes("cold")) {
    return "General Physician";
  }
  if (symptoms.includes("skin") || symptoms.includes("rash")) {
    return "Dermatologist";
  }
  if (symptoms.includes("stress") || symptoms.includes("anxiety")) {
    return "Psychiatrist";
  }

  return "General Physician";
};

module.exports = symptomToSpecialist;
