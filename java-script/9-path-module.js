// working with path and filesystem
const path = require('path')
console.log(path.sep)

// join paths
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log('This is the basename:',base)
console.log(`This is the basename: ${base}`)

// get the complete/absolute path
const absolutePath = path.resolve(__dirname, '/content', 'subfolder', 'test.txt')
console.log(absolutePath)