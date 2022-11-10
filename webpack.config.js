const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

var config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Frontend Mentor | Ping coming soon page",
      template: "src/index.hbs",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/images", to: "assets/images" }],
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.output.filename = "assets/js/bundle.js";
    config.devtool = "source-map";

    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    config.devServer = {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 9000,
      open: true,
      watchFiles: ["src/index.hbs"],
    };
  }

  if (argv.mode === "production") {
    config.output.filename = "assets/js/bundle.[contenthash].js";

    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "/",
          },
        },
        "css-loader",
        "postcss-loader",
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "assets/css/style.[contenthash].css",
      })
    );
  }

  return config;
};
