/**
 * https://github.com/kelektiv/node.bcrypt.js#api
 * */

const bcrypt = require("../node_modules/bcrypt/bcrypt");

const password = process.argv[2];
const hash = process.argv[3];

bcrypt
  .compare(password, hash)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err.message));
