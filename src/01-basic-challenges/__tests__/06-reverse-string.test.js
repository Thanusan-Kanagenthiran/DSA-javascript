import {expect, test} from "vitest"
import {reverseString, reverseString2, reverseString3} from "../06-reverse-string"

let string = "hello"
let expected = "olleh"
let string2 = "  Hello World!  "
let expected2 = "  !dlroW olleH  "
let falseString = 1243

test("Reverse a string using split-reverse-join method", () => {
  expect(reverseString(string)).toBe(expected)
  expect(reverseString(string2)).toBe(expected2)
  expect(reverseString(falseString)).toBe("Not a String")
})

test("Reverse a string using array manipulation", () => {
  expect(reverseString2(string)).toBe(expected)
  expect(reverseString(string2)).toBe(expected2)
  expect(reverseString2(falseString)).toBe("Not a String")
})

test("Reverse a string using character iteration", () => {
  expect(reverseString3(string)).toBe(expected)
  expect(reverseString(string2)).toBe(expected2)
  expect(reverseString3(falseString)).toBe("Not a String")
})
