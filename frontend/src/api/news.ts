export async function getNews(region: string) {
  const res = await fetch(`http://localhost:8000/api/news?region=${region}`);
  return res.json();
}