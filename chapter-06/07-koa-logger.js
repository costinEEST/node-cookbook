/**
 * https://github.com/koajs/koa/wiki#middleware
 * */

module.exports =
  () =>
  async ({ req: { method, url } }, next) => {
    console.log("Request received:", method, url);

    await next();
  };
