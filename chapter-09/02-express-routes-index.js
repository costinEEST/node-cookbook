const { Router } = require("../node_modules/express/index");

const router = Router();

router.get("/", function ({ session }, res) {
  res.render("02-index", { user: session.user });
});

module.exports = router;
