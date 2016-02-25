var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var bStr = buffer.toString();
var result = bStr.split("\n").length - 1;
console.log(result);