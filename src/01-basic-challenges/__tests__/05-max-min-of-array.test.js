import {expect, test} from "vitest"
import {maxOfArray, minOfArray} from "../05-max-min-of-array"

const validArray1 = [1, 8, 6, 9, 45]
const validArray2 = [10, 20, 30, 40, 50]
const invalidArray = 8 // Not a valid array, should return an error message

test("maxOfArray function returns the maximum value from an array", () => {
  expect(maxOfArray(validArray1)).toBe(45)
  expect(maxOfArray(validArray2)).toBe(50)
  expect(maxOfArray(invalidArray)).toBe("Not an array")
})

test("minOfArray function returns the minimum value from an array", () => {
  expect(minOfArray(validArray1)).toBe(1)
  expect(minOfArray(validArray2)).toBe(10)
  expect(minOfArray(invalidArray)).toBe("Not an array")
})
