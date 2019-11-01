'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/getCarouselList",controller.home.getCarousel)
  router.post("/addCarousel",controller.home.addCarousel)
  router.get("/delCarousel",controller.home.delCarousel)
  router.post("/editCarousel",controller.home.editCarousel)
  router.post("/upload",controller.home.upload)
  router.post("/user/login",controller.user.login)
  router.get("/getBannerList",controller.client.getCarousel)
  router.get("/getNavigator",controller.client.getNavigator)
  router.get("/getProductType",controller.client.getProductType)
  router.get("/getProducts",controller.client.getProducts)
};
