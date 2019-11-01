"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
    async list() {
        //查询
        const result = await this.ctx.service.home.list(this.ctx.request.query);
        if (result.length > 0) {
            this.ctx.body = {
                code: 1,
                result
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "查询失败"
            };
        }
    }
    async delete() {
        //根据id删除
        const result = await this.ctx.service.home.delete(
            this.ctx.request.query
        );
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "delete success"
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "delete failed"
            };
        }
    }
    async add() {
        //添加
        const result = await this.ctx.service.home.add(this.ctx.request.body);
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "add success"
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "add failed"
            };
        }
    }
    async edit() {
        //根据id修改
        const result = await this.ctx.service.home.edit(this.ctx.request.body);
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "edit success"
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "edit failed"
            };
        }
    }
    async getBlogById() {
        //通过id获取数据，用来编辑
        const result = await this.ctx.service.home.getBlogById(
            this.ctx.request.query
        );
        if (result.length > 0) {
            this.ctx.body = {
                code: 1,
                result
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "查询失败"
            };
        }
    }
}

module.exports = HomeController;
