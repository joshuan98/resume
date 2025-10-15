export const emojiDataUri = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='rgba(255,255,255,0.08)'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-size='60'>${emoji}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
