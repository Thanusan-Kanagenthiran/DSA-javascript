import {expect, test} from "vitest"
import {isNumber} from "../02-is-number"

test("Test isNumber function", () => {
  // Test numbers
  expect(isNumber(1)).toBe(true)
  expect(isNumber(3.14)).toBe(true)

  // Test non-numbers
  expect(isNumber("3.14")).toBe(false)
  expect(isNumber("hello")).toBe(false)
  expect(isNumber([1, 2, 3])).toBe(false)
  expect(isNumber({a: 42})).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber(undefined)).toBe(false)
})
