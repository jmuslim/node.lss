const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000, () =>{
    console.log('Server listening on port : 5000....');
})

//listen is a async. the momment set that up the event loop waiting for to come back.