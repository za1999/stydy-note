// 第一步引包
var express = require("express")

// 第二步创建服务器应用程序，相当于http.createServer
var app = express()

// 当服务器收到get请求 / 的时候，执行回调函数
app.get('/',function(req,res){
    // 在express中可以直接用req.query来获得网址后的参数
    console.log(req.query)
    res.send("hello express!")
})
app.get('/a',function(req,res){
    res.send("你好啊，小哥哥")
})
//相当于server.listen
app.listen(3000,function(){
    console.log('端口号3000的服务器')
})


// 公开指定目录
//只要这么做了，你就可以通过/public/xx的方式访问public里面的文件
app.use('/public/',express.static('./public/'))

// 模板引擎在express中也是一个api的事情



// 修改完代码自动重启，可以用一个第三方的命令行工具，nodemon来解决这个问题，安装方法npm i --global nodemon,使用方法，启动代码的node改成nodemon