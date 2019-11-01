'use strict';

const { Service } = require("egg")
class UserService extends Service{
    async login({username,password}){
        return this.app.mysql.get("user",{username,password})
    }
}

module.exports = UserService