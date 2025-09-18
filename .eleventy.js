module.exports = function(eleventyConfig) {
  // Copy static assets into _site
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("photos");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("circle.svg");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/het-website/"   
  };
};
