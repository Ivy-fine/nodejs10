'use strict';

module.exports = (appInfo)=>{
    const config = {
        keys:'123',
        mysql : {
            // database configuration
            client: {
              // host
              host: 'localhost',
              // port
              port: '3306',
              // username
              user: 'root',
              // password
              password: '123321',
              // database
              database: 'db_1704a',    
            },
            // load into app, default is open
            app: true,
            // load into agent, default is close
            agent: false,
          },
          security:{
            csrf:{
              enable:false
            }
          },
          multipart:{
            mode:'file'
          }
    }
    const userConfig={}
    return {
        ...config,
        ...userConfig
    }
}