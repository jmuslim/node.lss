//fs module = file system (Async)

// This file is for how we can read from the file-system.
// This Claabk fun created a new result-async.txt file on content. line 20-27.

const {readFile, writeFile}= require('fs');
console.log('start');

// We using callback function.
readFile('./content/first.txt', 'utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the 2nd result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this', result)
        }
        )
    })
})
 console.log('starting nect task.')

 // the main point is putting console.log() with sorat, next task etc to understand how async work. its will keep working until anothorer task has been done. it's not gonna wait like sync.