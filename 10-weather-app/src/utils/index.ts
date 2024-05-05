export function formatTemp(temp: number): number {
  // convert kelvin to celsius
  return Math.round(temp - 273.15);
}
