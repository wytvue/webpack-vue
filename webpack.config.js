//使用npm安装插件，-S => --save,写入到dependencies对象中，需要发布到生产环境
//-D => --save-dev,写入到devDependencies对象中，只用于开发环境，不用于生产环境
const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin")
//webpack-dev-server维护了一个虚拟的文件bundle.js放在了根路径下面，
//并没有存放在实际的物理磁盘上，而是托管到了电脑内存中
//html-webpack-plugin生成了一个.html文件，并自动绑定了文件所需要的依赖
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode:'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.(png|gif|bnp|jpg)$/,use:['url-loader','file-loader']},
      {test:/\.vue$/,use:'vue-loader'},
    ]
  }
}