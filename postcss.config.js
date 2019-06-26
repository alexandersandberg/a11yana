module.exports = {
  plugins: [
    require("postcss-preset-env")({
      "autoprefixer": true,
      "stage": 1
    }),
  ],
};
