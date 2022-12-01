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

  let result = data.split('\n\n').map((data) =>
    data
      .split('\n')
      .map((data) => parseInt(data))
      .reduce(reducer)
  )
  console.log(Math.max(...result))
})
