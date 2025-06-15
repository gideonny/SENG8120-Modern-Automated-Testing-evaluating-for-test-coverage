export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (coveragePerLiter <= 0) {
    throw new Error("Coverage per liter must be greater than zero");
  }

   if (area < 0) {
    throw new Error("Area must be a positive number");
  }
  return area / coveragePerLiter;
}
