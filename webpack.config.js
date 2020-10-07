var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    plugins: [
        // This plugin is added for cache busting. It will change the src file name according to the new hash file that is created.
        // And that hash file is added in the script tags of index.html using the template provided below!
        // This main.js file contains the whole minimzed fle and  index.html file contains the whole output in html version
        // INDEX.JS IS CREATED DYNAMICALLY AFTER THE WEBPACK IS RUN!!
        new HtmlWebpackPlugin({
            template: "./templates/frontend/index.html"
        })
    ], 

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:  {
                loader: 'html-loader',
                
                }
            }
        ]
    }
}