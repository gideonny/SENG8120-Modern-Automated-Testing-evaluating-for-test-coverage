export default function calculateCanvasSize(length: string, width: string) {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Invalid input: length and width must be numbers");
  }

  if (parsedLength < 0 || parsedWidth < 0) {
    throw new Error("Length and width must be positive numbers");
  }

  return parsedLength * parsedWidth;
}