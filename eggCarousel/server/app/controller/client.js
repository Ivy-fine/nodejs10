/*
 * @Author: fjn
 * @Date: 2019-10-25 11:41:03
 * @Last Modified by:   fjn
 * @Last Modified time: 2019-10-25 11:41:03
 */
const Controller = require("egg").Controller;
function respose(result, ctx) {
    if (result) {
        ctx.body = {
            code: 1,
            result
        };
    } else {
        ctx.body = {
            code: 0,
            result
        };
    }
}
class ClientController extends Controller {
    async getCarousel() {
        const result = await this.ctx.service.client.getCarousel();
        respose(result, this.ctx);
    }
    async getNavigator() {
        const result = await this.ctx.service.client.getNavigator();
        respose(result, this.ctx);
    }
    async getProductType() {
        const result = await this.ctx.service.client.getProductType();
        respose(result, this.ctx);
    }
    async getProducts() {
        const { result, count } = await this.ctx.service.client.getProducts(
            this.ctx.request.query
        );
        respose({ result, count: count[0]["count(*)"] }, this.ctx);
    }
}
module.exports = ClientController;
