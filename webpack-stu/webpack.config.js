
// 用resolve来拼接绝对路径方法
const {resolve} = require('path')
const htmlweb = require('html-webpack-plugin')

module.exports = {
    //webpack的配置
    //入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        //__dirname是nodejs的变量，代表当前文件的目录j绝对路径
        path:resolve(__dirname,'build')
    },
    // loader的配置
    module:{
        rules:[
            // loader配置
            {
                //这里放要匹配的文件
                //这里是已css结尾的文件
                test:/\.css$/,
                // use里面放用什么东西处理这种文件
                // use中loader执行顺序，从右到左，下到上
                use:[
                    // loader的下载，npm i style-loader
                    // 创建style标签，将js中的样式资源插入，添加到head中生效
                    'style-loader',

                    // 下面这个loader的作用是将css变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },{
                // 处理图片资源,这种方法有个问题，就是假如你HTML打包了，很难找到HTML里面的图片位置，比如img这种
                test:/\.(jpg|png|gif)$/,
                // 只使用一个loader写法，不需要use
                // 因为url-loader依赖于file-loader，所以这两个都需要下载
                loader:'url-loader',
                // option里是一些loader的配置
                options:{
                    // 下面的意思是图片小于8kb就会以base64处理
                    limit:8*1024
                }
            }
        ]
    },
    // 插件(plugins)的配置
    plugins:[
        // 插件的配置
        new htmlweb({
            template:'./src/index.html'
        })
    ],
    //模式
    mode:'development',
    devServer:{
        //这里是地址,我这里放的压缩后的地址
        contentBase:resolve(__dirname,'build'),
            //启动gzip压缩
            compress:true,
            //端口号
                port:3000
    }
  

}

// 在控制栏输入webpack就可以运行了