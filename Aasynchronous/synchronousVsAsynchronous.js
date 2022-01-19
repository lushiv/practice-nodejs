const fs = require('fs');

//Synchronous method 
const synchronousData = fs.readFileSync('read.txt', 'utf-8');
console.log(synchronousData)
console.log("after the READ synchronousData");

///Asynchronous method
const asynchronousData = fs.readFile('read.txt', 'utf-8', (err,data)=>{
    console.log(data);
});
console.log('after the data from asynchronousData')