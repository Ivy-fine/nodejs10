const {query,select,insert} = require("../utils/mysql")
const login = async ctx => {
    let {username,password} = ctx.request.body;
    // let $sql = `select * from user where username='${username}' and password='${password}'`
    let $sql = select("user",{username,password})
    const results = await query($sql)
    if(results.length){
      ctx.body={
        code:1,
        msg:'login success',
        result:results[0]
      }
    }else{
      ctx.body={
        code:0,
        msg:'login failed'
      }
    }
  }
const registry = async ctx => {
  let {username,password} = ctx.request.body;
  // let $sql = `insert into user (username,password) values (?,?)`
  const $sql = insert('user',{username,password})
  const results = await query($sql)
    ctx.body={
      code:1,
      msg:'registry success'
    }
  
}
module.exports ={
  login,
  registry
};