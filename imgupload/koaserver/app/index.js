const Koa = require("koa")
const KoaRouter = require("koa-router")
const static = require("koa-static")
const bodyparser = require("koa-bodyparser")
const path = require('path')
const koabody = require("koa-body")
const { upload } = require("./controller/user")

const app = new Koa()
const router = new KoaRouter()

app.use(static(path.join(process.cwd(),"app/public")))
app.use(koabody({
    multipart:true,
    // formidable:{
    //     uploadDir:path.join(process.cwd(),"app/public/photo"),
    //     keepExtensions:true,
    //     maxFieldsSize:2*1024*1024
    // }
}))
app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods())
router.post("/user/upload",upload)

app.listen(8181,()=>{
    console.log("koaserver is running at 8181")
})