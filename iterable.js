function createIterable(num) {
  let start = 0
  let step = 1
  let value = start

  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          // eslint-disable-next-line no-unreachable-loop
          while (num > 0) {
            value += start
            start = step
            step = value
            num -= 1
            result = { value, done: false }
            return result
          }
          return { value, done: true }
        },
      }
    },
  }
}

const iterable = createIterable(10)

for (const number of iterable) {
  console.log(number)
}
