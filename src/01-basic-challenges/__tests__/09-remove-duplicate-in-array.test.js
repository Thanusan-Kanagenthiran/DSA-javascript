import {expect, test} from "vitest"
import {removeDuplicatesFromArray, removeDuplicatesFromArray2} from "../09-remove-duplicate-in-array"

let testCases = [
  {input: [1, 2, 3, 4, 4, 5, 5], expected: [1, 2, 3, 4, 5]},
  {input: [1, 1, 2, 2, 3, 3], expected: [1, 2, 3]},
  {input: [], expected: []},
  {input: [1, 2, 3], expected: [1, 2, 3]},
  {input: [1, 1, 1, 1, 1], expected: [1]},
]

test("removeDuplicatesFromArray (using Set) function removes duplicates from an array", () => {
  testCases.forEach((testCase) => {
    expect(removeDuplicatesFromArray(testCase.input)).toEqual(testCase.expected)
  })
})

test("removeDuplicatesFromArray2 (using loop) function removes duplicates from an array", () => {
  testCases.forEach((testCase) => {
    expect(removeDuplicatesFromArray2(testCase.input)).toEqual(testCase.expected)
  })
})
