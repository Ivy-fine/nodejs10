const http = require("http")
http.createServer((req,res)=>{
    res.end("server1 is running")
}).listen(8081,()=>{
    console.log('server is running at 8081')
})