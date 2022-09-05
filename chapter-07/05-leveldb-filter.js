/**
 * https://github.com/Level/levelup#dbcreatereadstreamoptions
 * https://github.com/Level/levelup#dbbatch-chained-form
 * */

const { join } = require("node:path");

const levelup = require("../node_modules/levelup/lib/levelup");
const leveldown = require("../node_modules/leveldown/leveldown");

const db = levelup(leveldown(join(__dirname, "./data")));

db.put("Task:1", "");
db.put("Task:2", "");
db.put("Task:3", "");
db.put("Task:4", "");

db.createReadStream({
  gte: "Task:1",
  lte: "Task:3",
}).on("data", function (data) {
  console.log(data.key.toString());
});

db.batch()
  .put("forename", "Beth")
  .put("surname", "Griggs")
  .del("forename")
  .write(() => console.log("Batch operations complete."));
