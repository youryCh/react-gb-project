export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
}
