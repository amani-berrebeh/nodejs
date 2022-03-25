const fs = require('fs')
const path= process.argv[2];
fs.readFile(path,function callback (err, data) { const tab=data.toString().split('\n').length-1
console.log(tab)
    })
