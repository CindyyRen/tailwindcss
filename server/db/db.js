const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'example_user',
  password: 'example_password',
  database: 'example_db',
  connectionLimit: 10 // 设置连接池的最大连接数
});

module.exports = pool.promise(); // 使用 promise 版本的连接池