const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static")
const path = require("path")

const {login,registry} = require("./controller/user")
const {carouselList,navigatorList,productList,searchProduct,productDetail} = require('./controller/home')
const {adminLogin,addProduct,delProduct,editProduct,pageProduct} = require("./controller/manage")
const router = new Router();
const app = new Koa();

app.use(koaStatic(path.join(process.cwd(),'app/public')))
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post("/user/login",login);
router.post("/user/registry",registry);

router.get("/getCarouselList",carouselList)
router.get("/getNavigatorList",navigatorList)
router.get("/getProductList",productList)
router.get("/getDetail",productDetail)
router.get("/searchProduct",searchProduct)//模糊搜索

router.post("/admin/login",adminLogin);
router.post("/admin/addProduct",addProduct)
router.post("/admin/delProduct",delProduct)
router.post("/admin/editProduct",editProduct)
router.get("/admin/pageProduct",pageProduct)//分页

app.listen(7001, () => {
  console.log("server is running at 7001");
});
