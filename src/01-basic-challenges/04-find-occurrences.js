export const findOccurrences = (inputString, character) => {
  const regex = new RegExp(character, "g")
  const count = (inputString.match(regex) || []).length
  return count
}
