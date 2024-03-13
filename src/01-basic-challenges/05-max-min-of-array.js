export const maxOfArray = (array) => {
  if (Array.isArray(array)) {
    return array.length <= 0 ? undefined : Math.max(...array)
  } else {
    return "Not an array"
  }
}

export const minOfArray = (array) => {
  if (Array.isArray(array)) {
    return array.length <= 0 ? undefined : Math.min(...array)
  } else {
    return "Not an array"
  }
}
