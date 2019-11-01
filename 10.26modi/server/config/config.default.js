/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1572050293558_7771";

    // add your middleware config here
    config.middleware = ["oauth"];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        oauth: {
            ignore: ["/user/login", "/user/registry"]
        },
        mysql: {
            client: {
                host: "localhost",
                port: "3306",
                user: "root",
                password: "123321",
                database: "db_blog"
            },
            app: true,
            agent: false
        },
        security: {
            csrf: {
                enable: false
            }
        }
    };

    return {
        ...config,
        ...userConfig
    };
};
