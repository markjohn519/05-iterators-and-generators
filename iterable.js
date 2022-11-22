function createIterable(num) {
  let start = 0
  let step = 1
  let value = step

  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          // eslint-disable-next-line no-unreachable-loop
          for (let i = 1; i < num;) {
            if (start === 0) {
              console.log(start)
            }
            result = { value, done: false }
            value = start + step
            start = step
            step = value
            num -= 1
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
