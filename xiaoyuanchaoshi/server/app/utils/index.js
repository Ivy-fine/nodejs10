const loop = function(fields,common){
    let str="";
    for(key in fields){
        str += `${key}='${fields[key]}'${common}`
    }
    str = str.slice(0,-common.length)
    return str
}

module.exports={
    loop
}