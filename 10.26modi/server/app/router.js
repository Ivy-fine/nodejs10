"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post("/user/login", controller.user.login);
    router.post("/user/registry", controller.user.registry);
    router.get("/getBlogList", controller.home.getBlogList);
    router.get("/getCommentLsit", controller.home.getCommentList);
    router.get("/getBlogById", controller.home.getBlogById);
    router.post("/addBlog", controller.home.addBlog);
    router.post("/addComment", controller.home.addComment);
    router.get("/getSearch", controller.home.getSearch);
};
