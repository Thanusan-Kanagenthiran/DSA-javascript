export const findOccurrences = (inputString, substring) => {
  if (typeof inputString !== "string" || typeof substring !== "string") return 0 // If either input is not a string, return 0
  if (substring === "") return 0 // If substring is an empty string, return 0
  const regex = new RegExp(substring, "g")
  const count = (inputString.match(regex) || []).length
  return count
}
