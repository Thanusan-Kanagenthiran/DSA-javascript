import {expect, test} from "vitest"
import {maxOfArray, maxOfArray2} from "../05-max-of-array"

const validArray1 = [1, 8, 6, 9, 45]
const validArray2 = [10, 20, 30, 40, 50]
const emptyArray = []
const invalidArray = 8 // Not a valid array, should return an error message

test("Find maximum of an array using spread syntax and Math.max", () => {
  expect(maxOfArray(validArray1)).toBe(45)
  expect(maxOfArray(validArray2)).toBe(50)
  expect(maxOfArray(emptyArray)).toBe(undefined)
  expect(maxOfArray(invalidArray)).toBe("Not an array")
})

test("Find maximum of an array using reduce function", () => {
  expect(maxOfArray2(validArray1)).toBe(45)
  expect(maxOfArray2(validArray2)).toBe(50)
  expect(maxOfArray2(emptyArray)).toBe(undefined)
  expect(maxOfArray2(invalidArray)).toBe("Not an array")
})
