/**
 *  Implement a task list using LevelDB as a store
 *
 * https://github.com/Level/levelup#dbputkey-value-options-callback
 * https://github.com/Level/leveldown/#db--leveldownlocation
 * https://github.com/Level/memory-level, alternative for leveldown adapter
 * */

const { join } = require("node:path");

const levelup = require("../node_modules/levelup/lib/levelup");
const leveldown = require("../node_modules/leveldown/leveldown");

const db = levelup(leveldown(join(__dirname, "./data")));

const task = process.argv[2];

if (!task) {
  listTasks();
} else {
  addTask();
}

function addTask() {
  const key = `Task: ${Math.random().toString(32).replace(".", "")}`;
  db.put(key, task, (err) => {
    if (err) throw err;
    listTasks();
  });
}

function listTasks() {
  db.createReadStream().on("data", (data) => {
    console.log(data.key.toString(), "=", data.value.toString());
  });
}
