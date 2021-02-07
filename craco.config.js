const tailwind = require("tailwindcss");
const autoPrefixer = require("autoprefixer");
const eslintConfig = require("./.eslintrc.json");

module.exports = {
  style: {
    postcss: {
      plugins: [tailwind, autoPrefixer],
    },
  },
  eslint: {
    configure: () => {
      return eslintConfig;
    },
  },
};
