const bcrypt = require("../node_modules/bcrypt/bcrypt");

const password = process.argv[2];
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  console.log({ err, hash });
});
