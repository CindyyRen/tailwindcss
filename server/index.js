const expreses = require('express');
const mysql = require('mysql2');

const app = expreses();

const port = process.env.PORT || 3000;

// 创建 MySQL 连接
const connection = mysql.createConnection({
  host: '127.0.0.1', // 如果你在本地运行 MySQL，则使用 127.0.0.1 或 localhost
  port: 3306, // MySQL 默认端口
  user: 'example_user',
  password: 'example_password',
  database: 'example_db',
});
// 连接到 MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

app.use(expreses.json());
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/api/example', (req, res) => {
  res.josn({ message: 'this is an example endopoint ' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
