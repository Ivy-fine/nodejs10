'use strict';
const {Service} = require('egg')
const {selectSql} = require('../utils/sqlQuery')
class ClientService extends Service{
    async getCarousel(){
        const $sql = selectSql("carousel",{statu:1})
        return this.app.mysql.query($sql)
    }
    async getNavigator(){
        const $sql = selectSql("navigator")
        return this.app.mysql.query($sql)
    }
    async getProductType(){
        const $sql = selectSql('type')
        return this.app.mysql.query($sql)
    }
    async getProducts({type=0,pageInd=0,pageSize=3}){
        const $sql = type==0?`select * from product,type where type=typeid limit ${pageInd},${pageSize}`
            :`select * from product,type where type=typeid and type=${type} limit ${pageInd},${pageSize}`
        const $countSql = type==0?`select count(*) from product,type where type=typeid`
            :`select count(*) from product,type where type=typeid and type=${type}`
        return {result:await this.app.mysql.query($sql),count:await this.app.mysql.query($countSql)}
    }
}

module.exports = ClientService;