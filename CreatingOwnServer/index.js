const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end("Hello Home");
    }
    else if (req.url==='/about'){
        res.end("Hello from about ")
    }
})

server.listen(8000, 'localhost'),() => {
    console.log('Listening on port no : 8000 ')
}