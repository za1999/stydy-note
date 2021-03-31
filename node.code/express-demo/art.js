// 这里是art-template在express里面的用法
// 先下载 npm i --save art-template express-art-template

// 引包
var express = require("express")



// 创建服务器应用程序，相当于http.createServer
var app = express()

// 配置使用art-template
// 第一个参数表示当渲染以.art结尾的文件时，使用atr-template模板引擎,也可以改成HTML什么的哦，都可以的！！！！！！！！
app.engine('art',require('express-art-template'))
// express为response提供了一个render方法，默认不可用，配置了模板引擎就可以使用了，用法res.render('html模板名',{模板数据})，第一个参数默认不写路径，会去项目中的views目录查找
// 也就是express开发人员希望把所有视图文件都放在views目录中
//如果想要修改默认路径views，可以这么写 app.set('views',你想要的路径)

// 当服务器收到get请求 / 的时候，执行回调函数
app.get('/',function(req,res){
    // 在express中可以直接用req.query来获得网址后的参数，只能get哦
    console.log(req.query)
    // 还有个重定向方法res.redirect('路径')
    res.send("hello express!")
})
app.get('/a',function(req,res){
    res.render('404.art')
})
app.get('/admin',function(req,res){
    res.render('admin.art',{
        name:"达拉彭啵啵啵啵啵啵"
    })
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


// 在express中没有内置获取表单post请求的api，我们需要使用第三方插件body-parser，npm i --save body-parser
// 安装完后下面就配置，配置完成之后则req请求对象上会多出来一个属性body，你就可以获取表单post请求数据了，配置信息自己网上百度，这里不使用


// unshift方法的使用
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.unshift("Lemon","Pineapple");
//fruits 将输出：

//Lemon,Pineapple,Banana,Orange,Apple,Mango
