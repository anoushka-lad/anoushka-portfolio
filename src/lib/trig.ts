/**
 * Rounds a number to a fixed number of decimal places.
 * This prevents hydration mismatches caused by floating-point precision
 * differences between server and client when computing trig values
 * (Math.sin, Math.cos) for SVG coordinates.
 */
export function r(value: number, decimals: number = 4): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
