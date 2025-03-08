export function getRandomItem<T>(item: T[]): T {
  return item[Math.floor(Math.random() * item.length)];
}
