const isNumber = (value) => typeof value === "number" && isFinite(value)

export const calculator = (number1, number2, operator) => {
  if (isNumber(number1) && isNumber(number2)) {
    let result

    switch (operator) {
      case "+":
        result = number1 + number2
        break
      case "-":
        result = number1 - number2
        break
      case "*":
        result = number1 * number2
        break
      case "/":
        result = number1 / number2
        break
      default:
        return "Invalid operator"
    }

    return result
  } else return "Invalid inputs"
}
