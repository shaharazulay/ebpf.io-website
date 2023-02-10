const redirects = require('../redirects.json');

const createBlogPages = require('./create-blog-pages');
const createBlogPosts = require('./create-blog-posts');
const createStaticPages = require('./create-static-pages');

module.exports = async (options) => {
  await createStaticPages(options);
  await createBlogPages(options);
  await createBlogPosts(options);
  const { createRedirect } = options.actions;

  redirects.forEach((redirect) =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      statusCode: redirect.statusCode,
      force: redirect.force,
    })
  );
};