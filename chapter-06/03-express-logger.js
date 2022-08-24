module.exports =
  () =>
  ({ method, url }, _, next) => {
    console.log("Request received:", method, url);
    next();
  };
