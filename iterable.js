function createIterable(n) {
  let start = 0
  let step = 1
  let value = start
  let num = n

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (num > 0) {
            value += start
            start = step
            step = value
            num -= 1
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
