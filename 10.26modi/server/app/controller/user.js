"use strict";

const { Controller } = require("egg");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
class UserController extends Controller {
    async login() {
        //登录
        const result = await this.ctx.service.user.login(this.ctx.request.body);
        if (result.length) {
            const { avatar, username, id } = result[0];
            const token = jwt.sign(
                {
                    username
                },
                "secret"
            );
            this.ctx.session.userinfo = { id, avatar, username, token };
            this.ctx.body = {
                code: 1,
                msg: "login success",
                // result,
                token
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "login failed"
            };
        }
    }
    async registry() {
        //注册
        const { username, password } = this.ctx.request.body;
        const avatarArr = fs.readdirSync(
            path.join(process.cwd(), "app/public/avatar")
        );
        const ind = Math.floor(Math.random() * avatarArr.length);
        const result = await this.ctx.service.user.registry(
            username,
            password,
            "avatar/" + avatarArr[ind]
        );

        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "registry success"
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "registry failed"
            };
        }
    }
}
module.exports = UserController;
