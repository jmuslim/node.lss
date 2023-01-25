//path module
const path = require('path');
console.log(path.sep); // sep =seperat method

const filePath = path.join('/content', 'subfolder','test.txt')
console.log(filePath);// join method


// test.txt file is a base file, so to get acces to base file. follow below method.
const base = path.basename(filePath);
console.log(base);


//We want them in real life we will be working in difrent enviorment so need to know which are we working on.
const absolute = path.resolve(__dirname, 'content', 'subfolde', 'test.txt');
console.log(absolute);
