const { Router } = require("express")
const content = require("./content")
const router = new Router()

router.get("/", (_, res) => {
  res.send(content())
})

module.exports = router
