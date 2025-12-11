module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("stylesheets");
  eleventyConfig.addPassthroughCopy("javascripts");
  eleventyConfig.addPassthroughCopy("pdf");

  return {
    dir: {
      layouts: "_layouts"
    }
  };
};
