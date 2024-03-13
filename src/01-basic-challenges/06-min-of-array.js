// Method 1: Find minimum using spread syntax and Math.min
export const minOfArray = (array) => {
  return Array.isArray(array) ? (array.length <= 0 ? undefined : Math.min(...array)) : "Not an array"
}

// Method 2: Find minimum using reduce function
export const minOfArray2 = (arr) => {
  return Array.isArray(arr) ? arr.reduce((min, current) => (current < min ? current : min), arr[0]) : "Not an array"
}
