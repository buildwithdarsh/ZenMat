// Simulated network delays for realistic loading states

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Page load: 800-1200ms */
export function pageLoadDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, randomBetween(800, 1200)));
}

/** User actions (book, submit, etc.): 400-700ms */
export function actionDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, randomBetween(400, 700)));
}

/** Lazy-loaded sections: 300-500ms */
export function lazyDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, randomBetween(300, 500)));
}

/** One intentionally slow load: 1800-2500ms */
export function slowLoadDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, randomBetween(1800, 2500)));
}

/** Custom delay */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
