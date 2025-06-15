export default function calculateCanvasSize(length: string, width: string) {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Invalid input: length and width must be numbers");
  }

  return parsedLength * parsedWidth;
}