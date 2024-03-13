import {expect, test} from "vitest"
import {sum} from "../01-sum"

test("sum function computes addition correctly", () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, -2)).toBe(-1)
  expect(sum(-1, -2)).toBe(-3)
  expect(sum(4, -2)).toBe(2)
})
