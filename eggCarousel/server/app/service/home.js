'use strict';

const { Service } = require("egg")
const fs = require("fs")
const path = require("path")
const {selectSql,insertSql,deleteSql,updateSql} = require("../utils/sqlQuery")
class HomeService extends Service{
    async getCarousel({ind=0,pageSize=8}){
        const $sql = selectSql('carousel')+` limit ${ind},${pageSize}`
        return this.app.mysql.query($sql)
    }
    async getCount(){
        const $sql = 'select count(*) from carousel'
        return this.app.mysql.query($sql)
    }
    async addCarousel({title,pic_url,start_time,end_time,link,statu=0}){
        const $sql = insertSql('carousel',{title,pic_url,start_time,end_time,link,statu})
        return this.app.mysql.query($sql)
    }
    async delCarousel({id}){
        const $sql = deleteSql('carousel',{id})
        return this.app.mysql.query($sql)
    }
    async editCarousel({title,pic_url,start_time,end_time,link,statu=0,id}){
        const $sql = updateSql('carousel',{title,pic_url,start_time,end_time,link,statu},id)
        return this.app.mysql.query($sql)
    }
    async upload({filename,filepath}){
        const filedata = fs.readFileSync(filepath)
        const writepath = path.join(process.cwd(),"app/public/images",filename)
        const err = fs.writeFileSync(writepath,filedata)
        return {
            err,
            url:"images/"+filename
        }
    }
}

module.exports = HomeService