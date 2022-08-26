/**
 * https://github.com/koajs/koa/blob/master/docs/api/index.md#application
 * https://github.com/koajs/static#api
 * https://github.com/koajs/router/blob/master/API.md#routerroutes--function
 * https://github.com/koajs/koa/blob/master/docs/api/index.md#applisten
 * */

const { join } = require("node:path");

const Koa = require("../node_modules/koa/lib/application");
const serve = require("../node_modules/koa-static/index");
const router = require("../node_modules/koa-router/lib/router")();
const routing = require("./05-koa-routes");
const logger = require("./07-koa-logger");

const app = new Koa();

app.use(logger());
app.use(serve(join(__dirname, "public")));

router.use("/", routing.routes());
app.use(router.routes());

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${this.address().port}`);
});
