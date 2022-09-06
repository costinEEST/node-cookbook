/**
 * https://github.com/substack/tape#tplann
 * https://github.com/substack/tape#tequalactual-expected-msg
 * */

const test = require("../node_modules/tape/lib/test");

const { add } = require("./calculator");

test("test add integers 1 and 2", (t) => {
  t.plan(1);
  t.equal(add(1, 2), 3);
});

test("test add strings 1 and 2", (t) => {
  t.plan(1);
  t.equal(add("1", "2"), 3);
});
