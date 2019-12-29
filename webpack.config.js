const path = require('path');
//console.log(__dirname)
module.exports = (env) => {
   const isProduction = env === 'production'
      return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public'),
            filename: 'bundle.js'
        },
        module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
                use: [
                    // {
                    //     loader: css-loader,
                    //     option:{
                    //         sourceMap:true
                    //     }
                    // },
                    // {
                    //     loader: sass-loader,
                    //     option:{
                    //         sourceMap:true
                    //     }
                    // }
                     'style-loader', 
                      'css-loader'//,
                    // 'sass-loader'
                ]
        }]
        },
         devtool: isProduction ? 'source-map' : 'inline-source-map',
         devServer: {
             contentBase: path.join(__dirname,'public'),
             historyApiFallback:true
         }
        }
}

//loader