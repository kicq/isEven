import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'isEven.js',
    library: 'GetEvenBool',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'index.html', // Путь к исходному HTML-файлу
  //   }),
  // ],
};
