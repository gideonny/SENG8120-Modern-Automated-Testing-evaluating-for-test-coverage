import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
});


//test for error handling
test("throws error when inputs are not valid numbers", () => {
  expect(() => calculateCanvasSize("abc", "20")).toThrow("Invalid input: length and width must be numbers");
});

test("throws error when inputs are missing", () => {
  expect(() => calculateCanvasSize("", "")).toThrow("Invalid input: length and width must be numbers");
});