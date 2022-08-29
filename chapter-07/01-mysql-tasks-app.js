/**
 * https://github.com/mysqljs/mysql#establishing-connections
 * https://github.com/mysqljs/mysql#performing-queries
 * */

const { createConnection } = require("../node_modules/mysql/index");

require("../node_modules/dotenv/lib/main").config();

const db = createConnection({
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
});

db.query("CREATE DATABASE tasks");
db.query("USE tasks");

db.query(`
  CREATE TABLE tasks.tasks (
  id INT NOT NULL AUTO_INCREMENT,
  task TEXT NOT NULL, PRIMARY KEY ( id ))
`);

const ignore = new Set(["ER_DB_CREATE_EXISTS", "ER_TABLE_EXISTS_ERROR"]);

db.on("error", (err) => {
  if (ignore.has(err.code)) return;
  throw err;
});

db.query(`
  INSERT INTO tasks.tasks (task)
  VALUES ("Walk the dog.");
`);

db.query(`SELECT * FROM tasks.tasks;`, (err, results, fields) => {
  console.log({ err, results, fields });
  db.end();
});
