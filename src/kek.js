module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     contentBase: './dist',
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };