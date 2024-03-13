// Method 1: Reverse a string using split-reverse-join
export const reverseString = (string) => {
  if (typeof string === "string") {
    return string.split("").reverse().join("")
  } else {
    return "Not a String"
  }
}

// Method 2: Reverse a string using array manipulation
export const reverseString2 = (str) => {
  if (typeof str !== "string") {
    return "Not a String"
  }
  return Array.from(str).reverse().join("")
}

// Method 3: Reverse a string using character iteration
export const reverseString3 = (str) => {
  if (typeof str !== "string") {
    return "Not a String"
  }
  let reversedStr = ""
  for (const char of str) {
    reversedStr = char + reversedStr
  }
  return reversedStr
}
