const
    path = require('path'),
    articleRoute = require(path.join(__dirname, 'article.route'));

   function initRoutes(server) {
       server.use("/api/v1/article", articleRoute);
   }

   module.exports = {
    initRoutes
}