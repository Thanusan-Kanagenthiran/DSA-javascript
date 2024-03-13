import {expect, test} from "vitest"
import {findOccurrences} from "../04-find-occurrences"

let inputString = "Hello World"
let emptyString = ""
let substring1 = "l"
let substring2 = "lo"
let substring3 = "hello"

test(`findOccurrences function correctly counts occurrences of substrings`, () => {
  expect(findOccurrences(inputString, substring1)).toBe(3)
  expect(findOccurrences(inputString, substring2)).toBe(1)
  expect(findOccurrences(inputString, substring3)).toBe(0)
  expect(findOccurrences(inputString, emptyString)).toBe(0)
})

test(`findOccurrences function handles edge cases`, () => {
  expect(findOccurrences(null, "o")).toBe(0)
  expect(findOccurrences(undefined, "o")).toBe(0)
  expect(findOccurrences(inputString, null)).toBe(0)
  expect(findOccurrences(inputString, undefined)).toBe(0)
  expect(findOccurrences("", "o")).toBe(0)
  expect(findOccurrences("Hello World", "")).toBe(0)
  expect(findOccurrences("Hello World", "o ")).toBe(1)
})
