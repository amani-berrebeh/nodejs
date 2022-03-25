const fs = require('fs')
const path= process.argv[2];
const data=fs.readFileSync(path)
const tab=data.toString().split('\n').length-1
console.log(tab)