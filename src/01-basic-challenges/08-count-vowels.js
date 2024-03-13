// Method 1: Count vowels using filter and includes
export const countVowels = (str) => str.split("").filter((char) => "aeiouAEIOU".includes(char)).length

// Method 2: Count vowels using regex
export const countVowels2 = (str) => (str.match(/[aeiouAEIOU]/gi) || []).length
