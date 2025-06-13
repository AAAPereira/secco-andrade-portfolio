export function getDateTimeString() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, "-");
}
