const twig = require("@factorial/eleventy-plugin-twig");

const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig}",
  },
};

module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.addPassthroughCopy({'src/admin': 'admin'})
  config.addPassthroughCopy({'src/assets': 'assets'})
  config.addPassthroughCopy({'src/favicon.ico': 'favicon.ico'})
  config.addPlugin(twig, twigOptions)
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
