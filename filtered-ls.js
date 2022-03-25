const paath= process.argv[2]
const exten= "."+process.argv[3]
const fs = require('fs')
const path= require('path')
fs.readdir(paath,function callback (err, data)
 { 
 data.map(
     (el)=>{
         if (path.extname(el)===exten) {
            console.log(el)  
         }
     }
 )

    })