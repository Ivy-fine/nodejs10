const {Controller} = require("egg")
const fs = require("fs")
const path = require("path")
class userController extends Controller{
    async login(){
        const { username,password } = this.ctx.request.body
        // console.log(username,password)
        const $sql = "select * from user where username=? and password=?";
        const $params = [username,password]
        const result = await this.app.mysql.query($sql,$params)
        // console.log(result)
        if(result.length){
            this.ctx.status = 200;
            this.ctx.body={
                code:1,
                msg:'login success'
            }
        }else{
            this.ctx.status = 401;
            this.ctx.body={
                code:0,
                msg:'login failed'
            }
        }
    }
    async registry(){
        const { username,password } = this.ctx.request.body
        const $sql = "insert into user (username,password) values (?,?)";
        const $params = [username,password]
        const result = await this.app.mysql.query($sql,$params)
        if(result.affectedRows>0){
            this.ctx.status = 200;
            this.ctx.body={
                code:1,
                msg:'registry success'
            }
        }else{
            this.ctx.status = 500;
            this.ctx.body={
                code:0,
                msg:'registry failed'
            }
        }
    }
    async upload(){
        console.log(this.ctx.request.files)
        const {filepath,filename} = this.ctx.request.files[0]
        const writepath = path.join(process.cwd(),"app/public/photo",filename)
        const filedata = fs.readFileSync(filepath)
        const result = fs.writeFileSync(writepath,filedata)
        console.log(result)
        if(!result){
            this.ctx.body={
                code:1,
                imgUrl:"public/photo/"+filename
            }
        }else{
            this.ctx.body={
                code:0
            }
        }
    }
}

module.exports = userController