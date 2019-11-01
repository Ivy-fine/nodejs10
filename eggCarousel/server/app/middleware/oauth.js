module.exports= (option,app)=>{
    return async function oauth(ctx,next){
        // console.log(ctx.request.header)
        if(ctx.session.userinfo){
            if(ctx.request.header.authorization === ctx.session.userinfo.token){
                await next()
            }else{
                ctx.status = 401;
                ctx.body={
                    code:0,
                    msg:'无访问权限'
                }    
            }
        }else{
            ctx.status = 401;
            ctx.body={
                code:0,
                msg:'无访问权限'
            }
        }
    }
}