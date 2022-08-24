/**
 * https://expressjs.com/en/starter/static-files.html
 * https://expressjs.com/en/4x/api.html#app.use
 * https://expressjs.com/en/4x/api.html#app.listen
 * */

const { join } = require("node:path");

const routes = require("./01-express-routes");
const express = require("../node_modules/express/index");

const app = express();

app.use(express.static(join(__dirname, "public")));
app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${this.address().port}`);
});
