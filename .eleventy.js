// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy("./_public/css/**/*.css");
//   eleventyConfig.addPassthroughCopy("./src/images");
//   eleventyConfig.addPassthroughCopy("./src/fonts");
//   eleventyConfig.addPassthroughCopy("./src/scripts");
//   eleventyConfig.addPlugin(require("eleventy-load"), {
//     rules: [
//       {
//         test: /\.html$/,
//         loaders: [
//           {
//             loader: require("eleventy-load-html"),
//           },
//         ],
//       },
//       {
//         test: /\.scss$/,
//         loaders: [
//           {
//             loader: require("eleventy-load-sass"),
//           },
//           {
//             loader: require("eleventy-load-css"),
//           },
//           {
//             loader: require("eleventy-load-file"),
//             options: {
//               name: "[hash].css",
//             },
//           },
//         ],
//       },
//     ],
//   });

//   return {
//     dir: {
//       input: "src",
//       output: "_public",
//     },
//   };
// };
