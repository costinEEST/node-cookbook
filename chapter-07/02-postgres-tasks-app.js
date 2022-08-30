/**
 * https://node-postgres.com/api/client#clientconnect
 * https://node-postgres.com/api/client#clientquery
 * https://node-postgres.com/api/client#clientend
 * */

require("../node_modules/dotenv/lib/main").config();

const { Client } = require("../node_modules/pg/lib/index");
// const db = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
// });
const db = new Client();
const task = process.argv[2];

const CREATE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS tasks (id SERIAL, task TEXT NOT NULL, PRIMARY KEY ( id ))`;
const INSERT_TASK_SQL = `INSERT INTO tasks (task) VALUES ($1);`;
const GET_TASKS_SQL = `SELECT * FROM tasks;`;

db.connect((err) => {
  if (err) throw err;
  db.query(CREATE_TABLE_SQL, (err) => {
    if (err) throw err;
    if (task) {
      db.query(INSERT_TASK_SQL, [task], (err) => {
        if (err) throw err;
        listTasks();
      });
    } else {
      listTasks();
    }
  });
});

function listTasks() {
  db.query(GET_TASKS_SQL, (err, results) => {
    if (err) throw err;
    console.log(results.rows);
    db.end();
  });
}
