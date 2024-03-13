import {expect, test} from "vitest"
import {calculator} from "../03-calculator"

const testCases = [
  {num1: 5, num2: 5, operator: "+", expected: 10},
  {num1: 10, num2: 5, operator: "-", expected: 5},
  {num1: 5, num2: 5, operator: "*", expected: 25},
  {num1: 35, num2: 5, operator: "/", expected: 7},
  {num1: "35", num2: 5, operator: "/", expected: "Invalid inputs"},
  {num1: 25, num2: "5", operator: "/", expected: "Invalid inputs"},
  {num1: "35", num2: "5", operator: "/", expected: "Invalid inputs"},
  {num1: 35, num2: 5, operator: 5, expected: "Invalid operator"},
  {num1: 35, num2: 5, operator: "#", expected: "Invalid operator"},
  {num1: 35, num2: 5, operator: "test", expected: "Invalid operator"},
]

test("Calculator function performs arithmetic operations correctly", () => {
  testCases.forEach(({num1, num2, operator, expected}) => {
    const result = calculator(num1, num2, operator)
    expect(result).toBe(expected)
  })
})
