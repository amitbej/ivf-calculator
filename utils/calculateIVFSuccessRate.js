export function calculateIVFSuccessRate(
  age,
  ivfCycles,
  hasUndergoningProcedures,
  medicalConditions
) {
  let successRate = 0;

  switch (age) {
    case "Below 30":
      successRate = 70;
      break;
    case "31-40":
      successRate = 60;
      break;
    case "41-45":
      successRate = 50;
      break;
    case "46-50":
      successRate = 40;
      break;
    default:
      successRate = 55; 
  }

  if (ivfCycles > 1) {
    successRate *= 0.8;
  }

  if (hasUndergoningProcedures) {
    successRate *= 0.9;
  }

  for (const condition of medicalConditions) {
    if (condition === "PCOS") {
      successRate *= 0.8;
    } else if (condition === "Endometriosis") {
      successRate *= 0.7;
    } else if (condition === "Low Ovarian Reserve") {
      successRate *= 0.6;
    } else if (condition === "Male Factor Infertility") {
      successRate *= 0.7;
    }
  }

  return Math.max(0, successRate);
}
