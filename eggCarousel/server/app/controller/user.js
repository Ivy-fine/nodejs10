const { Controller } = require("egg");
const { getToken } = require("../utils/user");
class UserController extends Controller {
  async login() {
    const result = await this.ctx.service.user.login(this.ctx.request.body);
    if (result) {
      const token = getToken(result);
      this.ctx.session.userinfo = {
        id: result.id,
        token
      };
      this.ctx.body = {
        code: 1,
        msg: "login success",
        result,
        token
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: "login failed"
      };
    }
  }
}

module.exports = UserController;
