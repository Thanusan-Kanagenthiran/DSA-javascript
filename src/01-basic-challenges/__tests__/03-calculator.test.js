import {expect, test} from "vitest"
import {calculator} from "../03-calculator"

test("Addition operation: performs arithmetic operations correctly", () => {
  expect(calculator(5, 5, "+")).toBe(10)
  expect(calculator(5, "5", "+")).toBe("Invalid inputs")
})

test("Subtraction operation: performs arithmetic operations correctly", () => {
  expect(calculator(15, 5, "-")).toBe(10)
  expect(calculator(5, "5", "-")).toBe("Invalid inputs")
})

test("Multiplication operation: performs arithmetic operations correctly", () => {
  expect(calculator(5, 5, "*")).toBe(25)
  expect(calculator(5, "5", "*")).toBe("Invalid inputs")
})

test("Division operation: performs arithmetic operations correctly", () => {
  expect(calculator(25, 5, "/")).toBe(5)
  expect(calculator(5, "5", "/")).toBe("Invalid inputs")
})

test("Invalid operator or inputs: handled correctly", () => {
  expect(calculator(25, 5, "&")).toBe("Invalid operator")
  expect(calculator(5, "5", "%")).toBe("Invalid inputs")
  expect(calculator("5", 5, "%")).toBe("Invalid inputs")
  expect(calculator("5", "5", "%")).toBe("Invalid inputs")
})
