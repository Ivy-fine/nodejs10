"use strict";

const { Service } = require("egg");

class HomeService extends Service {
    async list({ page, pageSize }) {
        const ind = (page - 1) * pageSize;
        //判断是否传递了分页数据，没有的话查询全部
        const $sql =
            page && pageSize
                ? `select * from blog,blogstatus where statu=sid limit ${ind},${pageSize}`
                : "select * from blog,blogstatus where statu=sid";
        return this.app.mysql.query($sql);
    }
    //根据id删除
    async delete({ id }) {
        const $sql = `delete from blog where id=${id}`;
        return this.app.mysql.query($sql);
    }
    //添加
    async add({ time, title, author, readcount, statu, importance }) {
        const $sql = `insert into blog (time,title,author,readcount,statu,importance) values (?,?,?,?,?,?)`;
        const $params = [time, title, author, readcount, statu, importance];
        return this.app.mysql.query($sql, $params);
    }
    //根据id修改
    async edit({ time, title, author, readcount, statu, importance, id }) {
        const $sql = `update blog set time=?,title=?,author=?,readcount=?,statu=?,importance=? where id=?`;
        const $params = [time, title, author, readcount, statu, importance, id];
        return this.app.mysql.query($sql, $params);
    }
    async getBlogById({ id }) {
        const $sql = `select * from blog where id=${id}`;
        return this.app.mysql.query($sql);
    }
}

module.exports = HomeService;
