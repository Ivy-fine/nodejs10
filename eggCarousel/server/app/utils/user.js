const md5 = require("md5")
module.exports.getToken = (result)=>{
    const token = md5(JSON.stringify({
        'header':{
            "alg": "md5",
            "typ": "jwt"
        },
        'payload':{
            'uid':result.id,
            'tim':new Date().getTime()
        }
    }))
    return token;
}