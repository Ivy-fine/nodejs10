"use strict";

module.exports = () => {
    return async function oauth(ctx, next) {
        const identity = ctx.request.header.eggidentity; //获取请求头中eggidentity字段
        if (identity === "admin") {
            //判断eggidentity 字段是否等于 admin
            await next();
        } else {
            ctx.body = {
                code: 0,
                status: 401,
                msg: "无权限"
            };
        }
    };
};
