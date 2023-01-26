//Awiat async need more refressher.

const {readFile, writeFile} = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// (line 3-5 we remove and just put .promise after the first line and change readfilepromise to just readfile. same for 2nd line and it's will work as same. more explore needs to done with diffrent syntax)

const start = async() =>{
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8'); // We set up path so here we need to give the path
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `This is awsome : ${first} ${second}`,
        {flag: 'a'})
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()


// const getText = (path) => {
    //     return new Promise((resolve, reject) =>{
    //         readFile(path, 'utf8', (err , data) => {
    //             if (err) {
    //               reject(err)
    //             } else {
    //                 resolve(data);
    //             }
    //         }) 
    //     })
    // }

// (line 22 - 33 is for readfile function this is one way we can do awit async.)

    // getText('./content/first.txt')
    // .then(result => console.log(result))
    // .catch((err) =>console.log(err))