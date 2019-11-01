"use strict";

module.exports = () => {
    return async function oauth(ctx, next) {
        if (ctx.session.userinfo) {
            if (ctx.session.userinfo.token === ctx.request.header.token) {
                await next();
            } else {
                ctx.body = {
                    code: 0,
                    msg: "无权限，请登录"
                };
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "无权限，请登录"
            };
        }
    };
};
