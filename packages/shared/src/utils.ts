export function deepClone(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects(target: any, source: any) {
  return { ...target, ...source };
}
