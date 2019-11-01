'use strict';

const { Controller } = require("egg")

class HomeController extends Controller{
    async getProduct(){
        const $sql = 'select id,pname,pimg from product'
        const result = await this.app.mysql.query($sql)
        if(result.length){
            this.ctx.body={
                code:1,
                msg:'查询成功',
                result
            }
        }else{
            this.ctx.body={
                code:0,
                msg:'暂无数据'
            }
        }
    }
    async getProductById(){
        const { id } = this.ctx.request.query
        const $sql = `select * from product where id=${id}`
        const result = await this.app.mysql.query($sql)
        if(result.length){
            this.ctx.body={
                code:1,
                msg:'查询成功',
                result
            }
        }else{
            this.ctx.body={
                code:0,
                msg:'暂无数据'
            }
        }
    }
}

module.exports = HomeController