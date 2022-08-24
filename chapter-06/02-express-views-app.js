/**
 * https://expressjs.com/en/resources/template-engines.html
 * */

const { join } = require("node:path");

const routes = require("./02-express-routes");
const express = require("../node_modules/express/index");

const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "public")));
app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${this.address().port}`);
});
