// @flow

export function max(a: number, b: number): number {
  return a > b ? a : b;
}

export function min(a: number, b: number): number {
  return a < b ? a : b;
}

export function abs(a: number): number {
  return a > 0 ? a : -a;
}

export function square(a: number): number {
  return a * a;
}
