const fs = require('fs')
const path = __dirname

fs.readFile(`${path}/input.txt`, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const reducer = (acc, curr) => {
    const sum = parseInt(acc) + parseInt(curr)
    return sum
  }

  const findThreeHighestNumber = (arr) => {
    arr = arr.sort((a, b) => b - a)
    let list = arr.splice(0, 3)
    console.log(list.reduce(reducer))
  }

  let result = data.split('\n\n').map((data) =>
    data
      .split('\n')
      .map((data) => parseInt(data))
      .reduce(reducer)
  )
  findThreeHighestNumber(result)
})
