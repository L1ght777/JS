// working with path and filesystem
const { readFileSync, writeFileSync } = require('fs')

 const first = readFileSync('./content/first.txt', 'utf8');
 const second = readFileSync('./content/second.txt', 'utf8');
 console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `This is new content for the result file: ${first, second}`,
    // this is to append to the file:
    // {flag: 'a'}
)