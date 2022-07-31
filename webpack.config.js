require('babel-polyfill');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
    node: {
      child_process: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
     child_process: false,
     fs: false,
     net: false,
     tls: false
  },
  // resolve: {
  //   fallback: {
  //     // child_process: false,
  //     fs: false,
  //     net: false,
  //     tls: false,
  //     buffer: false,
  //     util: false,
  //       stream: false,
  //       crypto: false,
  //       assert: false,
  //       url:false,
  //       path: false,
  //       querystring: false,
  //       os:false
  //     // dgram:false
  //   }
  // }
};