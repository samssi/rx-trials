const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("dist"),
        filename: "index_bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/,loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}

