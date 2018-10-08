const path = require("path");
const glob = require("glob");

module.exports = {
    exportPathMap: async function(defaultPathMap) {
        return {
            "/": { page: "/" }
        };
    },

    webpack: (config, env) => {
        if(env.dev === false)
            config.devtool = false;
        config.resolve.alias = {
            components: path.resolve(__dirname, "./components"),
            helpers: path.resolve(__dirname, "./helpers"),
            languageProvider: path.resolve(__dirname, "./languageProvider"),
            image: path.resolve(__dirname, "./static/image"),
            pages: path.resolve(__dirname, "./pages"),
            config: path.resolve(__dirname, "./config")
        };
        config.module.rules.push(
            {
                test: /\.(css|scss|less)/,
                loader: "emit-file-loader",
                options: {
                    name: "dist/[path][name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ["babel-loader", "raw-loader", "postcss-loader"]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "babel-loader",
                    "raw-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["styles", "node_modules"]
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "babel-loader",
                    "raw-loader",
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            includePaths: ["styles", "node_modules"]
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config;
    }
};
