// Method 1: Remove duplicates from an array using Set
export const removeDuplicatesFromArray = (array) => [...new Set(array)]

// Method 2: Remove duplicates from an array using loop and indexOf
export const removeDuplicatesFromArray2 = (array) => {
  let uniqueArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i])
    }
  }
  return uniqueArray
}
