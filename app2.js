// const names = require('./4-names')
// const sayHi = require('./5-utils')
// require('./7-mnd-grenade')

// //console.log(names)


// sayHi('kenechukwu')
// sayHi('john')
//  sayHi('peter')


 const path = require('path')

console.log(path.sep) 

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base =  path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test')
console.log(absolute)
