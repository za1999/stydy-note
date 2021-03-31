var http = require('http')
var fs = require('fs')

//1.创建serve
var ser = http.createServer()

//2.监听Serve的request请求事件，设置处理函数.一个请求对应一个响应，如果在一个请求中，响应已经结束了，则不能重复响应
ser.on('request',function (req,res) {
    console.log('收到请求了！')
    var url = req.url;

    // readdir可以读取文件目录！
    fs.readdir('E:\hello',function(err,files){
            console.log(files)
            if(err){
                return res.end('404 not found')
            }
            res.end(files.toString())
    })

})

//3.绑定端口号，启动服务

ser.listen(3000,function(){
    console.log('服务器已经启动！')
})