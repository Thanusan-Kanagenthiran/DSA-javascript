import {expect, test} from "vitest"
import {isPalindrome} from "../07-is-palindrome"

let palindrome = "level"
let falsePalindrome = "not a palindrome"

test("isPalindrome function correctly identifies palindromes", () => {
  expect(isPalindrome(palindrome)).toBe(true)
  expect(isPalindrome(falsePalindrome)).toBe(false)
})
