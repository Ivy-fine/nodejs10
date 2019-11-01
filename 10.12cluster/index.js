const cluster = require("cluster")
const {cpus} = require("os")

const cLength = cpus().length;
const services = ["./services/server1.js","./services/server2.js"]

if(cluster.isMaster){
    let worker;
    for(let i=0;i<cLength;i++){
        worker = cluster.fork()
        worker.send("111")
        worker.on("message",val=>{
            console.log('child says:'+val)
        })
    }
    cluster.on("exit",worker=>{
        console.log(`worker:${worker.id} pid:${worker.process.pid} is exit`)
        worker.kill(['SIGTERM'])
        worker = cluster.fork()
    })
}else{
    services.forEach(server=>{
        require(server)
        process.on("message",val=>{
            console.log('master says:'+val)
        })
        process.send("222")
    })
    
}