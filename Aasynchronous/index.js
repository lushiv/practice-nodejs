const fs = require("fs")

// Write with Asynchronous method
fs.writeFile('read.txt', "Test data", 
(err)=>{
console.log('File is created')
console.log(err)
});


// add new data on data using Asynchronous
fs.appendFile('read.txt', 'New Data',(err)=>{
console.log('Task completed')
});

//Read data using Asynchronous
fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
    console.log(err)
});