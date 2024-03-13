import {expect, test} from "vitest"
import {minOfArray, minOfArray2} from "../06-min-of-array"

const validArray1 = [1, 8, 6, 9, 45]
const validArray2 = [10, 20, 30, 40, 50]
const emptyArray = []
const invalidArray = 8 // Not a valid array, should return an error message

test("Find minimum of an array using spread syntax and Math.max", () => {
  expect(minOfArray(validArray1)).toBe(1)
  expect(minOfArray(validArray2)).toBe(10)
  expect(minOfArray(emptyArray)).toBe(undefined)
  expect(minOfArray(invalidArray)).toBe("Not an array")
})

test("Find minimum of an array using reduce function", () => {
  expect(minOfArray2(validArray1)).toBe(1)
  expect(minOfArray2(validArray2)).toBe(10)
  expect(minOfArray2(emptyArray)).toBe(undefined)
  expect(minOfArray2(invalidArray)).toBe("Not an array")
})
