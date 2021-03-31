// 引入
var express  = require('express')
// 引入路由文件
var rou  = require('./router')
// 我们要从json文件里面读取数据，先引入fs
var fs = require('fs')


// 创建服务器
var app = express()





// 公开一下node_moules文件，因为我们要引用里面的bootstrap,可以公开多个
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
// 配置模板引擎，只有配置了才能使用render方法返回
app.engine('html',require('express-art-template'))


// 把路由容器挂载到app服务中
app.use(rou)


app.get('/',function (req,res) {

// 这边开始读取数据了
// 因为读文件里面的数据都是二进制读出来，我们可以使用第二个参数直接读出来是usf8格式，当然也可以二进制数据出来用tostring()方法
    fs.readFile('./database.json','utf8',function(err,data){
      if(err){
        return res.status(500).send("服务器错误了！")
      }
      if(data){
        // data不能直接用，因为现在是字符串
        res.render('index.html',{
          title:JSON.parse(data).title,
          students:JSON.parse(data).students
        })
      }
    })

   
  })



//   监听端口
app.listen(3000,function(){
    console.log("服务器已经打开")
})


// app.use(function(req,res){
// 所有没有处理的页面都会在这里进行处理
// })