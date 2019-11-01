'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getCarousel(){
    const result = await this.ctx.service.home.getCarousel(this.ctx.request.query)
    const count = await this.ctx.service.home.getCount()
    // console.log(result)
    this.ctx.body ={
      code:1,
      result,
      count:count[0]['count(*)']
    }
  }
  async addCarousel(){
    const result = await this.ctx.service.home.addCarousel(this.ctx.request.body)
    // console.log(result)
    if(result.affectedRows>0){
      this.ctx.body={
        code:1,
        msg:'插入成功'
      }
    }else{
      this.ctx.body = {
        code:0,
        msg:"插入失败"
      }
    }
  }
  async delCarousel(){
    const result = await this.ctx.service.home.delCarousel(this.ctx.request.query)
    if(result.affectedRows>0){
      this.ctx.body={
        code:1,
        msg:'删除成功'
      }
    }else{
      this.ctx.body = {
        code:0,
        msg:"删除失败"
      }
    }
  }
  async editCarousel(){
    const result = await this.ctx.service.home.editCarousel(this.ctx.request.body)
    if(result.affectedRows>0){
      this.ctx.body={
        code:1,
        msg:'修改成功'
      }
    }else{
      this.ctx.body = {
        code:0,
        msg:"修改失败"
      }
    }
  }
  async upload(){
    // console.log(this.ctx.request.files[0])
    const result = await this.ctx.service.home.upload(this.ctx.request.files[0])
    if(!result.err){
      this.ctx.body={
        code:1,
        msg:"上传成功",
        url:result.url
      }
    }else{
      this.ctx.body={
        code:0,
        msg:'上传失败'
      }
    }
  }
}

module.exports = HomeController;
