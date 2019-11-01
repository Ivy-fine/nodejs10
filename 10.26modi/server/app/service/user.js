"use strict";

const { Service } = require("egg");
class UserService extends Service {
    async login({ username, password }) {
        const $sql = "select * from user where username=? and password=?";
        const $params = [username, password];
        return this.app.mysql.query($sql, $params);
    }
    async registry(username, password, avatar) {
        const $sql =
            "insert into user (username,password,avatar) values (?,?,?)";
        const $params = [username, password, avatar];
        return this.app.mysql.query($sql, $params);
    }
}

module.exports = UserService;
