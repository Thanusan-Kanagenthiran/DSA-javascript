import {expect, test} from "vitest"
import {countVowels, countVowels2} from "../09-count-vowels"

const testCases = [
  {input: "", expected: 0},
  {input: "a", expected: 1},
  {input: "xyz", expected: 0},
  {input: "Hello World", expected: 3},
]

test("Count number of vowels using filter and includes", () => {
  testCases.forEach(({input, expected}) => {
    expect(countVowels(input)).toBe(expected)
  })
})

test("Count number of vowels  using regex", () => {
  testCases.forEach(({input, expected}) => {
    expect(countVowels2(input)).toBe(expected)
  })
})
