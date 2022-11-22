function createGenerator(num) {
  let start = 0
  let step = 1
  let value = start

  return function* generatorFunction() {
    while (num > 0) {
      value += start
      start = step
      step = value
      num -= 1
      yield value
    }

    return value
  }
}

const generatorFunction = createGenerator(10)
const generatorObject = generatorFunction()

console.log([...generatorObject])
