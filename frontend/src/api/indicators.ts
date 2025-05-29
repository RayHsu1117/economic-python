export async function getIndicators(region: string) {
  const res = await fetch(`http://localhost:8000/api/indicators?region=${region}`);
  return res.json();
}