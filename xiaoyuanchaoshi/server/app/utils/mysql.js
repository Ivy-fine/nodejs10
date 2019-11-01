/*
 * @Author: fjn 
 * @Date: 2019-10-18 15:44:30 
 * @Last Modified by: fjn
 * @Last Modified time: 2019-10-19 09:53:12
 */
const {mysqlConfig} = require("../config")
const {loop} = require("./index")
const mysql = require("mysql");
const connection = mysql.createConnection(mysqlConfig);
class SqlMethods {
  constructor(){
    connection.connect()
  }
  query($sql, $params = []) {
    return new Promise((resolve, reject) => {
      connection.query($sql, $params, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
  select(table,fields){
    if(!fields){
      return `select * from ${table}` 
    }else{
      return `select * from ${table} where ${loop(fields," and ")}`
    }
  }
  insert(table,fields){
    const keys = Object.keys(fields)
    const values = Object.values(fields)
    return `insert into ${table} (${keys.join()}) values ('${values.join("','")}')`
  }
  sqlDelete(table,id){
    return `delete from ${table} where id=${id}`
  }
  update(table,id,fields){
    return `update ${table} set ${loop(fields,",")} where id=${id}`
  }
  search(table,field,keywords){
    return `select * from ${table} where ${field} like '%${keywords}%'`
  }
}
module.exports = new SqlMethods()
