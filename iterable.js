function createIterable(n) {
  let num1 = 0
  let num2 = 1
  let value = num1
  let length = n

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (length > 0) {
            value += num1
            num1 = num2
            num2 = value
            length -= 1
            return { value, done: false }
          }
          return { value, done: true }
        },
      }
    },
  }
}

const iterable2 = createIterable(10)

console.log([...iterable2])
