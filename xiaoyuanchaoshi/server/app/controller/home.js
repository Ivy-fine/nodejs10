const {query,select,search} = require("../utils/mysql")
const carouselList = async ctx=>{
    const $sql = select('banner')
    let results = await query($sql)
    ctx.body={
        code:1,
        msg:'success',
        data:results
    }
}
const navigatorList = async ctx=>{
    const $sql = select('navigator');
    let results = await query($sql)
    ctx.body={
        code:1,
        msg:'success',
        data:results
    }
}
const productList = async ctx=>{
    const {type} = ctx.request.query
    // const $sql = type?`select * from product,type where type=typeid and type='${type}'`:`select * from product,type where type=typeid`;
    const $sql = type?`${select('product,type',{type})} and type=typeid`:`${select('product,type')} where type=typeid`
    let results = await query($sql,[type])
    ctx.body={
        code:1,
        msg:'success',
        data:results
    }
}

const searchProduct = async ctx=>{
    const {keywords,field} = ctx.request.query;
    const $sql = search('product',field,keywords)
    const results = await query($sql)
    ctx.body ={
        code:1,
        results
    }
}
const productDetail = async ctx=>{
    const {id} = ctx.request.query
    const $sql = select('product',{id});
    let results = await query($sql)
    ctx.body={
        code:1,
        msg:'success',
        data:results[0]
    }
}
module.exports={
    carouselList,
    navigatorList,
    productList,
    searchProduct,
    productDetail
}