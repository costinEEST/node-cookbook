/**
 * https://github.com/sidorares/node-mysql2#first-query
 * https://github.com/sidorares/node-mysql2#using-prepared-statements
 * https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js
 * https://knowledge-base.secureflag.com/vulnerabilities/sql_injection/sql_injection_nodejs.html
 * www.symantec.com/connect/articles/detection-sql-injection-and-cross-site-scripting-attacks
 * */

const { createConnection } = require("../node_modules/mysql2/index");

require("../node_modules/dotenv/lib/main").config();

const db = createConnection({
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
});

db.query("CREATE DATABASE IF NOT EXISTS tasks");
db.query("USE tasks");

db.query(
  "CREATE TABLE IF NOT EXISTS tasks.tasks (" +
    "id INT NOT NULL AUTO_INCREMENT, " +
    "task TEXT NOT NULL, PRIMARY KEY ( id )" +
    ")"
);

const ignore = new Set(["ER_DB_CREATE_EXISTS", "ER_TABLE_EXISTS_ERROR"]);

db.on("error", (err) => {
  if (ignore.has(err.code)) return;
  throw err;
});

if (process.argv[2]) {
  db.query(
    `
      INSERT INTO tasks.tasks (task)
      VALUES (?);
    `,
    [process.argv[2]]
  );
}

db.query(`SELECT * FROM tasks.tasks;`, (err, results, fields) => {
  console.log({ err, results, fields });
});

db.end();
