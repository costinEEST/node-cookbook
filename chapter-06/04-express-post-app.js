/**
 * https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
 * */

const { join } = require("node:path");

const routes = require("./04-express-routes");
const express = require("../node_modules/express/index");
const bodyParser = require("../node_modules/body-parser/index");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(join(__dirname, "public")));
app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${this.address().port}`);
});
