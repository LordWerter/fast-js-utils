/**
 * check if an array contains any items
 * @param arr 
 */
export const isNotEmpty = (arr: any[]): boolean => Array.isArray(arr) && arr.length > 0;

export default isNotEmpty;