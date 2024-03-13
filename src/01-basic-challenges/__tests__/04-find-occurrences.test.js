import {expect, test} from "vitest"
import {findOccurrences} from "../04-find-occurrences"

test(`findOccurrences function correctly counts occurrences of characters`, () => {
  let inputString = "Hello World"

  let character1 = "l"
  let character2 = "lo"
  let character3 = "hello"

  expect(findOccurrences(inputString, character1)).toBe(3)
  expect(findOccurrences(inputString, character2)).toBe(1)
  expect(findOccurrences(inputString, character3)).toBe(0)
})
