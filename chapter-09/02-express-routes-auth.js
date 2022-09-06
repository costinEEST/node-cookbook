const { Router } = require("../node_modules/express/index");

const router = Router();

router.get("/login", (_, res, next) => {
  res.render("02-login", { fail: false });
  next();
});

router.post(
  "/login",
  ({ body: { username, password }, session }, res, next) => {
    if (session.user) {
      res.redirect("/");
      next();

      return;
    }
    if (username === "beth" && password === "badpassword") {
      session.user = { name: username };
      res.redirect("/");
      next();

      return;
    }

    res.render("02-login", { fail: true });
    next();
  }
);

router.get("/logout", ({ session }, res) => {
  session.user = null;
  res.redirect("/");
});

module.exports = router;
