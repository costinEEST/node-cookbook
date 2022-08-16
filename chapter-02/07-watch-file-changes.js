/**
 * Create a program that watches for changes in a file
 *
 * https://nodejs.org/api/fs.html#fswatchfilename-options-listener
 * https://nodejs.org/docs/latest/api/fs.html#fs_availability
 * */

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(path.dirname(__filename), "./file.txt");

fs.watch(filePath, (eventType, fileName) => {
  const time = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "long",
  }).format(new Date());

  return console.log(
    `${fileName} updated at ${time}. The event type is ${eventType}`
  );
});
