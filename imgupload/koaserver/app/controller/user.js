module.exports={
    upload: ctx=>{
        console.log(ctx.request.body.files)
        ctx.body={
            code:1,
            result:ctx.request
        }
    }
}