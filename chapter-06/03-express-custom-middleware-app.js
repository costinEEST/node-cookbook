/**
 * https://expressjs.com/en/resources/middleware.html
 * */

const { join } = require("node:path");

const logger = require("./03-express-logger");
const routes = require("./01-express-routes");
const express = require("../node_modules/express/index");

const app = express();

app.use(logger());
app.use(express.static(join(__dirname, "public")));
app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${this.address().port}`);
});
