export default function calculateCanvasSize(length: string, width: string) {
  const parsedLength = parseInt(length);
  const parsedWidth = parseInt(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Invalid input: length and width must be numbers");
  }

  return parsedLength * parsedWidth;
}
