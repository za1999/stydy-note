

 [TOC]



## webpack是什么

webpack是一种前端资源构建工具，一个静态模块打包器（moudle bundler）



#### webpack打包需要一个入口文件

然后将我们的文件打包输出一个bundle



## webpack的五个核心观念

#### entry

入口（entry）知识webpack打包后资源以哪个文件为入口开始打包，分析构建内部依赖图

#### output

输出（output）指示webpack打包后资源bundles输出到哪里，以及如何命名

#### loader

loader让webpack能够取处理那些非JavaScript文件（webpack自身只能理解JavaScript）

#### plugins

插件可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

#### mode（指示webpack使用相应模式的配置）

development   能让代码本地调试运行的环境

production   能让代码优化上线运行的环境





### 正式使用webpack

npm i webpack webpack-cli -g

webpack：就是webpack

webpack-cli：通过指令使用webpack的功能



打包开发环境：webpack 入口文件 -o 出口文件 --mode=development

打包生产环境：webpack 入口文件 -o 出口文件 --mode=production

生产环境比开发环境多一个压缩js代码，这两个都是把js编译成浏览器能看懂的



打包后的文件引用就可以了，比如

<script src="../build/build.js"></script>



引入代码：import 引入后的名字 from 引入文件的地址，只引入就impor '地址'

webpack能处理js和json资源，不能处理css/img等资源 



### webpack.config.js

webpack的配置文件

作用:指示webpack干那些活（当你运行webpack指令时，会加载里面的配置）

所有构建工具都是基于node来运行的，模块化默认使用commonjs，require就是commonjs的语法，打包工具都要使用commonjs。

import是官方的,es2015的模块！

这两类

require/exports    和import/export

这里还有一个东西babel：简单来说把 JavaScript 中 es2015/2016/2017/2046 的新语法转化为 es5，让低端运行环境(如浏览器和 node )能够认识并执行。

webpack与babel通常是配合起来使用

webpack是一个打包工具，打包js文件，css文件，图片，html等等，它可以分析整个项目的文件结构，确认文件之间的依赖，比如一个js文件引入了另一个js文件。在这个过程中可以合成js，压缩，加入hash等，最终生成项目文件。

#### vue 中的const {XXX } =this 的作用效果

样例1：

```
const { xxx } = this.state;
上面的写法是es6的写法，其实就相当于：

const xxx = this.state.xxx
```

**样例2：**

```
const {comment,index,deleteComment} = this 
上面的这句话是一个简写，最终的含义相当于
const  comment = this.comment
const  index = this.index
const   deleteComment = this.deleteComment
```

### webpack.config.js文件内容（webpack配置文件）

```javascript
*// 用resolve来拼接绝对路径方法*

const {resolve} = require('path')
//引入插件const htmlweb（这名字自己取啊） = require('html-webpack-plugin')



module.exports = {

  *//webpack的配置*

  *//入口起点*

  entry:'./src/index.js',

  *// 输出*

  output:{

​    *// 输出文件名*

​    filename:'built.js',

​    *// 输出路径*

​    *//__dirname是nodejs的变量，代表当前文件的目录j绝对路径*

​    path:resolve(__dirname,'build')

  },

  *// loader的配置*

  module:{

​    rules:[

​      *// loader配置*，loader顺序固定的！

​      {

​        *//这里放要匹配的文件*

​        *//这里是已css结尾的文件*

​        test:/\.css$/,

​        *// use里面放用什么东西处理这种文件*

​        *// use中loader执行顺序，从右到左，下到上*

​        use:[

​          *// loader的下载，npm i style-loader*

​          *// 创建style标签，将js中的样式资源插入，添加到head中生效*

​          'style-loader',



​          *// 下面这个loader的作用是将css变成commonjs模块加载到js中，里面内容是样式字符串*

​          'css-loader'

​        ]

​      },{

​        *// 处理图片资源**,这种方法有个问题，就是假如你HTML打包了，很难找到HTML里面的图片位置，比如img这种*，还需要一个html-loader

​        test:/\.(jpg|png|gif)$/,

​        *// 只使用一个loader写法，不需要use*

​        *// 因为url-loader依赖于file-loader，所以这两个都需要下载*

​        loader:'url-loader',

​        *// option里是一些loader的配置*

​        options:{

​          *// 下面的意思是图片小于8kb就会以base64处理*

​          limit:8*1024

//问题，因为url-loader默认使用es6模块解析，而html-loader是comonjs，html里面的url会出现问题[object Module]

//解决：关闭url-loader的es6模块化,使用commonjs

//关闭es6

esModule:false

//由于出来的名字很乱，我们也可以用name来设置名字

//[hash:10]取图片hash的前十位，[ext]取文件原来的扩展名

name:'[hash:10].[ext]'

​        }

​      }

​    ]

  },{
      //下面代码意思是除了css，js，html（当然这三个也可以用,不过在其他地方）的代码都file-loader
      exclude:/\.(css|js|html)$/,
          loader:'file-loader'
  }

  *// 插件(plugins)的配置*

  plugins:[

​    *// 插件的配置*
​      //这么用
​      //功能：默认创建一个html，自动引入打包好的资源

      new HtmlWebpackPlugin();
      //这样才能复制一个html文件，并引入所有打包好的资源，会在输出地址打印一个跟文件地址名字相同的HTML
      // new HtmlWebpackPlugin({
     // template:'HTML文件地址'
     //});


  ],

  *//模式*

  mode:'development',
      //开发服务器 devServer:用来自动化打包（自动编译，自动打开浏览器，自动刷新浏览器）
      //特点，只会在内存中编译打包，不会有任何输出
      //启动devServer指令为：(npx) webpack-dev-server，当然之前砸门需要下载包webpack-dev-server
  devServer:{
      //这里是地址,我这里放的压缩后的地址
      contentBase:resolve(__dirname,'build'),
          //启动gzip压缩
          compress:true,
          //端口号
              port:3000
  }



}
//loader 1.下载 2.使用
//plugins 1.下载 2. 引入 3.使用 比如npm i html-webpack-plugin
 引入 ： const HtmlWebpackPlugin =  require('html-webpack-plugin')

*// 在控制栏输入webpack就可以运行了*
```





在loader的配置  options里面还可以加outputPath，这种资源的输出路径

options:{

outputPath:'路径'

}

​                                                                                                                                                                                                              



