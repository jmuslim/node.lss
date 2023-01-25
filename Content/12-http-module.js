// it's create a new localhost server website.
// res = response,  req = request.

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to http home page.')
    }
    if(req.url === '/about')  {
    res.end('Here is my little short history')
    }
    res.end(`
    <h1>Oooppps!!!</h1>
    <p>We cant't seem to find the page you looking for.</p>
    <a href='/'>Back Home</a>
    `)
})

server.listen(5000)