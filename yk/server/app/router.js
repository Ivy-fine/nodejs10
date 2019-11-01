"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get("/delete", controller.home.delete);
    router.get("/list", controller.home.list);
    router.post("/add", controller.home.add);
    router.post("/edit", controller.home.edit);
    router.get("/getBlogById", controller.home.getBlogById);
};
