// frontend/vue.config.js

const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../static/vue"),
  assetsDir  : "static",
  indexPath  : "../templates/layouts/master.html",
  publicPath : "/static/vue/",
};
