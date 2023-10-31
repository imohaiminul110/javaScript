const http = require('http')
const fs = require('fs')
const port = 3000
const hostName = '127.0.0.1'

const myServer = http.createServer((req, res) => {
 
const handleReadFile = (statusCode, fileLocation) => 
{
    fs.readFile(fileLocation, (err, data) => 
    {
        res.writeHead(statusCode, {"content-type" : "text/html"});
        res.write(data);
        res.end();
    })
}
    if(req.url === '/' )
    {
        handleReadFile(200, "./views/index.html")
    }
    else if (req.url === '/about' )
    {
        handleReadFile(200, "./views/about.html")
       
    }
    else if (req.url === '/contact' )
    {
        handleReadFile(200, "./views/contact.html")
        
    }
    else
    {
        handleReadFile(400, "./views/error.html")       
    }
})

myServer.listen(port,hostName,() => {
    console.log(`server is running at http://${hostName}:${port}`)
})



