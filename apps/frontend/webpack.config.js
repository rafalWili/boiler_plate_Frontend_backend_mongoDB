const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    devtool: false,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        compress: true,
        port: 3000,
        hot: true,
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:7001",
                changeOrigin: true,
                secure: false
            }
        ]
    }
};
