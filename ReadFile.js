let fs = require('fs');

const implementation = (err, data) => {
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
}

fs.readFile('AsyncFile.txt',implementation);
console.log('Async File read in progress, this is printed as it is asynchronous');
let data = fs.readFileSync('SyncFile.txt');

console.log(data.toString());

console.log('Sync File read ended, this line is not printed until the file read is complete');