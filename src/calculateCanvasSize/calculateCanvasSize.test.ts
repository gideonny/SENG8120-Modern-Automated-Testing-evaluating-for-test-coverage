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

//test to support decimal points
test("returns correct result with decimal inputs", () => {
  const result = calculateCanvasSize("10.5", "2");
  expect(result).toEqual(21);
});

//test for negative numbers
test("throws error when length or width is negative", () => {
  expect(() => calculateCanvasSize("-5", "10")).toThrow("Length and width must be positive numbers");
  expect(() => calculateCanvasSize("5", "-10")).toThrow("Length and width must be positive numbers");
});