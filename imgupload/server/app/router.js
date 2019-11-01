'use strict';

module.exports = (app)=>{
    const {router,controller} = app
    router.post("/user/login",controller.user.login)
    router.post("/user/registry",controller.user.registry)
    router.get("/home/getProduct",controller.home.getProduct)
    router.get("/home/getProductById",controller.home.getProductById)
    router.post("/user/upload",controller.user.upload)
}