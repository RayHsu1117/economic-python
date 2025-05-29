export function useRegion() {
  return localStorage.getItem('region') || 'us';
}

export function setRegion(region: string) {
  localStorage.setItem('region', region);
}