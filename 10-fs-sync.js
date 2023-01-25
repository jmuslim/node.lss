//fs module = file system

// This file is for how we can read from the file-system.
// so to read from the sile we need to give parameters, 1st file path 2nd utf8.

const {readFileSync, writeFileSync}= require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
//console.log(first, second);

console.log('done with this task');
console.log('starting the next one');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

//we give another object property {flag: 'a'} to the writefilesync. by this node will over write to file. 

/*const fs = require('fs);
fs.readFileSync
This is another method of writing readfilesync.
*/


// // the main point is putting console.log() with start, next task etc to understand how sync work. its will keep working until anothorer task has been done. it's not gonna wait like async.