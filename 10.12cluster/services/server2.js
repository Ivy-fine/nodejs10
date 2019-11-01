const http = require("http")
http.createServer((req,res)=>{
    res.end("server2 is running")
}).listen(8082,()=>{
    console.log('server is running at 8082')
})