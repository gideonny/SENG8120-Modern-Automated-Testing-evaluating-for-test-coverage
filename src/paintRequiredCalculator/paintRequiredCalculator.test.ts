import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
});

//Tests for error handling
test("throws error when coverage per liter is zero", () => {
  expect(() => paintRequiredCalculator(100, 0)).toThrow("Coverage per liter must be greater than zero");
});
