import HtmlWebPackPlugin from "html-webpack-plugin";
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

// eslint-disable-next-line no-undef
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader", "eslint-loader"],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ],
};
export const plugins = [htmlPlugin];
