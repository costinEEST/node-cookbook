/**
 * https://github.com/expressjs/session#options
 * https://github.com/expressjs/session#name
 * https://github.com/expressjs/session#compatible-session-stores
 * */

const { join } = require("node:path");

const express = require("../node_modules/express/index");
const { urlencoded } = require("../node_modules/body-parser/index");
const session = require("../node_modules/express-session/index");

const index = require("./02-express-routes-index");
const auth = require("./02-express-routes-auth");

const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    name: "SESSIONID",
    secret: "Node Cookbook",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(urlencoded({ extended: false }));

app.use("/", index);
app.use("/auth", auth);

app.listen(3000, function () {
  console.log(`Server listening on port: ${this.address().port}`);
});
