var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: {
        main: './index'
    },
    output: {
        path: path.join(__dirname, './dist/'),
        publicPath: '/',
        filename: 'index.js'
    },
     // plugins进行插件的配置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
    devServer: {
      contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist
      port: 9000, //端口改为9000
      open:true, // 自动打开浏览器

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,//排除掉node_module目录
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env'] //转码规则
                    }
                }
            }
        ]
    }
}
module.exports = config;