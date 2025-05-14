export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/tools/bundle.css");
  eleventyConfig.addPassthroughCopy("src/tools/atomic_marker_extras.woff2");
  eleventyConfig.addPassthroughCopy("src/tools/atomic_marker.woff2");
  eleventyConfig.addPassthroughCopy("src/tools/fira_code.woff2");
  eleventyConfig.addPassthroughCopy("src/tools/menu.js");
  eleventyConfig.addPassthroughCopy("src/tools/glyphs.js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
