export function filterByField<T, K extends keyof T>(
  arr: Array<T>,
  field: K
): Array<T[K]> {
  return arr.reduce<Array<T[K]>>((acc, item) => {
    if (!acc.includes(item[field])) acc.push(item[field]);
    return acc;
  }, []);
}
