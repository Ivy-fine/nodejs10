function loop(fields,andwords){
    let str = '';
    for(key in fields){
        // console.log(key)
        str += `${key}='${fields[key]}' ${andwords}`
    }
    return str.slice(0,-andwords.length)
}
const selectSql = (table,fields)=>{
    if(!fields){
        return `select * from ${table}`
    }else{
        return `select * from ${table} where ${loop(fields,"and ")}`
    }
}
const insertSql = (table,fields)=>{
    let keys = ""
    let values = ""
    for(key in fields){
        keys += `${key},`
        values +=`'${fields[key]}',`
    }
    keys = keys.slice(0,-1)
    values = values.slice(0,-1)
    return `insert into ${table} (${keys}) values (${values})`
}

const deleteSql = (table,fields)=>{
    return `delete from ${table} where ${loop(fields,"and ")}`
}
const updateSql = (table,fields,id)=>{
    return `update ${table} set ${loop(fields,",")} where id=${id}`
}
module.exports = {
    selectSql,
    insertSql,
    deleteSql,
    updateSql
} 