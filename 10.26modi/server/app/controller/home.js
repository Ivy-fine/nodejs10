"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
    async getBlogList() {
        //博客列表
        const result = await this.ctx.service.home.getBlogList();
        this.ctx.body = {
            code: 1,
            result
        };
    }
    async getCommentList() {
        //评论列表
        const result = await this.ctx.service.home.getCommentList();
        this.ctx.body = {
            code: 1,
            result
        };
    }
    async getBlogById() {
        //通过id获取博客详情
        const result = await this.ctx.service.home.getBlogById(
            this.ctx.request.query
        );
        this.ctx.body = {
            code: 1,
            result
        };
    }
    async addBlog() {
        //新增博客
        const result = await this.ctx.service.home.addBlog(
            this.ctx.request.body
        );
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "success"
            };
        }
    }
    async addComment() {
        //新增评论
        const result = await this.ctx.service.home.addComment(
            this.ctx.request.body
        );
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "success"
            };
        }
    }
    async getSearch() {
        const result = await this.ctx.service.home.getSearch(
            this.ctx.request.query
        );
        this.ctx.body = {
            code: 1,
            result
        };
    }
}

module.exports = HomeController;
