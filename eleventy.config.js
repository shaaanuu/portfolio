export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/tools": "/" });

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
