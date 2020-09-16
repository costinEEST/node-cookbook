function content(opts, c = 20) {
  console.log(opts)
  return --c ? content(opts, c) : opts.ohoh
}

module.exports = content
