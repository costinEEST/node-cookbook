/**
 * https://github.com/koajs/router/blob/master/API.md#new-routeropts
 * */

const router = require("../node_modules/koa-router/lib/router")();

router.get("/", async (ctx) => {
  const title = "Koa.js";
  ctx.body = `
    <html>
      <head>
        <title> ${title} </title>
        <link rel="stylesheet" href="01-styles.css"> </head>
      <body>
        <p> Welcome to ${title} </p>
      </body>
    </html>
  `;
});

module.exports = router;
