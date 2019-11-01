const {query,select,insert,sqlDelete,update} = require("../utils/mysql")
const adminLogin = async ctx => {
    let {username,password} = ctx.request.body;
    // let $sql = `select * from admin where username='${username}' and password='${password}'`
    let $sql = select('admin',{username,password})
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
const addProduct = async ctx=>{
    let {pname,pimg,price,description,type} = ctx.request.body;
    let $sql = insert('product',{pname,pimg,price,description,type})
    await query($sql)
    ctx.body={
        code:1,
        msg:'insert success'
    }
}

const delProduct = async ctx=>{
    let {id} = ctx.request.body;
    const $sql = sqlDelete('product',id)
    await query($sql)
    ctx.body={
        code:1,
        msg:'remove success'
    }
}
const editProduct = async ctx=>{
  let {id,pname,pimg,price,description,type} = ctx.request.body;
  const $sql = update('product',id,{pname,pimg,price,description,type})
  await query($sql)
  ctx.body={
    code:1,
    msg:'update success'
  }
}

const pageProduct = async ctx=>{
  const {startInd,count} = ctx.request.query;
  const $sql = `${select('product')} limit ${startInd},${count}`;
  let results = await query($sql)
  const $countSql = 'select count(*) from product'
  let total = await query($countSql)
  ctx.body={
      code:1,
      msg:'success',
      data:results,
      total:total[0]['count(*)']
  }
}

module.exports={
    adminLogin,
    addProduct,
    delProduct,
    editProduct,
    pageProduct
}