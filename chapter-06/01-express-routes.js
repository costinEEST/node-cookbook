/**
 * https://expressjs.com/en/4x/api.html#express.router
 * https://expressjs.com/en/4x/api.html#router.METHOD
 * https://expressjs.com/en/4x/api.html#res.send
 * */

const { Router } = require("../node_modules/express/index");
const router = Router();

router.get("/", (_, res) => {
  const title = "Express";

  res.send(`
    <html>
      <head>
        <title> ${title} App</title>
        <link rel="stylesheet" href="01-styles.css">
      </head>
      <body>
        <p> Welcome to ${title} </p>
      </body>
    </html>
  `);
});

module.exports = router;
