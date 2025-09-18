module.exports = function(eleventyConfig) {
  // Copy static folders as-is -> _site/
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("photos");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("circle.svg");

  return {
    dir: {
      input: ".",        // your current source root
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    // <<< IMPORTANT for GitHub Pages project site: set your repo name here >>>
    // If your repo is "het-website", use "/het-website/". If it's "myWebsite", use "/myWebsite/".
    pathPrefix: "/het-website/"
  };
};
