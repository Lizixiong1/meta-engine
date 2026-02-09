export { set, get } from "lodash-es";
interface LeafNode {
  value: any;
  pathName: string[];
}
export function findLeafNodes<T extends object>(
  obj: T,
  parentPath: string[] = [],
): Array<LeafNode> {
  const results: Array<LeafNode> = [];

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...parentPath, key];

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      // 如果是对象，递归查找
      results.push(...findLeafNodes(value, currentPath));
    } else {
      // 如果不是对象，就是叶子节点
      results.push({ value, pathName: currentPath });
    }
  }

  return results;
}

/**
 * 合并classname
 * @param args
 * @returns {string}
 */
export const classnames = (...args: any[]): string =>
  (
    args
      .filter((a) => typeof a === "string" && a)
      .reduce((pre, cur) => `${pre} ${cur}`, "") as string
  ).trim();
