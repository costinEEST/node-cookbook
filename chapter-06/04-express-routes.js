/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action
 * https://expressjs.com/en/api.html#res.redirect
 * https://www.rfc-editor.org/rfc/rfc9110.html#name-302-found
 * */

const { Router } = require("../node_modules/express/index");
const router = Router();

router.get("/:name?", ({ params }, res) => {
  const title = "Express";
  const name = params.name;

  res.send(`
    <html>
    <head>
      <title> ${title} </title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1> ${title} </h1>
        <p> Welcome to ${title}${name ? `, ${name}.` : ""} </p>
        <form method=POST action=data>
        Name: <input name=name> <input type=submit>
        </form>
      </body>
    </html>
  `);
});

router.post("/data", ({ body }, res) => {
  res.redirect(`/${body.name}`);
});

module.exports = router;
