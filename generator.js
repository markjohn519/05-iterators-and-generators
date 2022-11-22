function createGenerator(n) {
  let num1 = 0
  let num2 = 1
  let value = num1
  let length = n

  return function* generatorFunction() {
    while (length > 0) {
      value += num1
      num1 = num2
      num2 = value
      length -= 1
      yield value
    }
    return value
  }
}

const generatorFunction = createGenerator(10)
const generatorObject = generatorFunction()

console.log([...generatorObject])
