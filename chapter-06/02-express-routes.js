/**
 * https://expressjs.com/en/4x/api.html#res.render
 * */

const { Router } = require("../node_modules/express/index");
const router = Router();

router.get("/", (_, res) => {
  res.render("02-index", {
    title: "Express with EJS",
  });
});

module.exports = router;
