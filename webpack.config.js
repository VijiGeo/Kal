const ExtensionReloader = require('webpack-extension-reloader');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const contentScripts = {
  content: './content/index.js'
}
const extensionPages = {
  options: './options/index.js',
  popup: './popup/index.js',
}
const backgroundScript = {
  background: './background/index.js'
}

let config = {
  mode: process.env.NODE_ENV,
  context: __dirname + '/src'
};

let ExtensionConfig = Object.assign({}, config, {
  entry: {
    ...backgroundScript,
    ...contentScripts,
    ...extensionPages
  },
  output: {
    path: __dirname + '/extension/dist/',
    filename: '[name].dist.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new ExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScript: Object.keys(contentScripts),
        extensionPage: Object.keys(extensionPages),
        background: 'background'
      }
    }),
    new CopyPlugin([
      {
        from: './icons/*',
        to: __dirname + '/extension/dist/',
      },
      {
        from: './popup/index.html',
        to: __dirname + '/extension/dist/popup.html',
      },
      {
        from: './popup/index.css',
        to: __dirname + '/extension/dist/popup.css',
      },
      {
        from: './options/index.html',
        to: __dirname + '/extension/dist/options.html',
      },
      {
        from: './options/index.css',
        to: __dirname + '/extension/dist/options.css',
      },
      {
        from: './content/index.css',
        to: __dirname + '/extension/dist/content.css',
      },
    ]),
  ]
});

module.exports = [
  ExtensionConfig,
];