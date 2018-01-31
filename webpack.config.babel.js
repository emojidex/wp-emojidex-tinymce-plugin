import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ZipPlugin from 'zip-webpack-plugin';

const pluginName = 'wp-emojidex-tinymce-plugin';

module.exports = {
  entry: {
    'plugin': './src/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist', pluginName, 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join('src', 'wp-emojidex-tinymce-plugin.php'),
        to: path.join(__dirname, 'dist', pluginName)
      }
    ]),
    new ZipPlugin({
      path: path.join(__dirname, 'dist'),
      filename: pluginName + '.zip',
      pathMapper: function(assetPath) {
        if (assetPath.endsWith('.php'))
          return path.join(pluginName, path.basename(assetPath));
        if (assetPath.endsWith('.js'))
          return path.join(pluginName, 'js', path.basename(assetPath));
      },
      include: [/\.(js|php)$/]
    })
  ]
}
