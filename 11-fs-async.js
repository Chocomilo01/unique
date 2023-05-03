const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 'error code'
    }
const first = result;
readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 'error code'
    }
    const second = result;
    writeFile('./content/result-async.txt',
 `Here is the result : ${first}, ${second}`,
 (err, result) => {
    if (err) {
        console.log(err)
        return 'error code'
    }
    console.log(result)
 }
 )
})


})
