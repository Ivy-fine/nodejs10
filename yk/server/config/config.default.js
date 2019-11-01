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
    config.keys = appInfo.name + "_1572327704931_421";

    // add your middleware config here
    config.middleware = ["oauth"];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        mysql: {
            client: {
                host: "localhost",
                port: "3306",
                user: "root",
                password: "123321",
                database: "yk"
            },
            app: true,
            agent: false
        },
        security: {
            csrf: {
                enable: false
            }
        },
        oauth: {
            ignore: ["/list"]
        }
    };

    return {
        ...config,
        ...userConfig
    };
};
