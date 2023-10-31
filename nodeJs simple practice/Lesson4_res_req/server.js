const http = require('http')
const port  = 3000;
const hostName = '127.0.0.1'

const myServer =  http.createServer((req, res) => 
{
    res.writeHead(202, {'content-type':'text/html'})
    res.end("Hello, This is my first server")
})

myServer.listen(port, hostName, () => {
    console.log(`server Is running at http://${hostName}:${port} `);
});
