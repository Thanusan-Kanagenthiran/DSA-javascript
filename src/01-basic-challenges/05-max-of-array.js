// Method 1: Find maximum using spread syntax and Math.max
export const maxOfArray = (arr) => {
  return Array.isArray(arr) ? (arr.length <= 0 ? undefined : Math.max(...arr)) : "Not an array"
}

// Method 1: Find maximum using reduce function
export const maxOfArray2 = (arr) => {
  return Array.isArray(arr) ? arr.reduce((max, current) => (current > max ? current : max), arr[0]) : "Not an array"
}
