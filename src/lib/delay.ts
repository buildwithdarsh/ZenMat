/**
 * Simulate network delay for realistic loading behavior.
 * - Page load: 800-1200ms
 * - Actions: 400-700ms
 * - Lazy sections: 300-500ms
 * - Slow section (one): 1800-2500ms
 */
export function delay(min: number, max: number): Promise<void> {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DELAY = {
  pageLoad: () => delay(800, 1200),
  action: () => delay(400, 700),
  lazySection: () => delay(300, 500),
  slow: () => delay(1800, 2500),
} as const;
