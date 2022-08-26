/**
 * https://github.com/koajs/router/blob/master/API.md#new-routeropts
 * https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate
 * */

const router = require("../node_modules/koa-router/lib/router")();

router.get("/", async (ctx) => {
  ctx.state = {
    title: "Koa.js",
  };

  await ctx.render("02-index");
});

module.exports = router;
