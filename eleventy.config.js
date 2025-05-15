export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/tools": "/" });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
