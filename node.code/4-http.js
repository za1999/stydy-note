// node可以很轻松的创建web服务器，需要引入http
// 然后用createServer创建一个实例
var http  =  require("http")
var web = http.createServer();
// 服务器可以对数据进行服务，发请求，接受请求，处理请求，给予反馈



// 注册request请求事件，当客户端请求过来就会触发request事件，然后执行第二个参数回调函数
// request请求函数接受两个参数，request和response，request用来接受一些信息，response用来反馈信息
web.on("request",function(request,response){
    // 声明格式了
    // text/plain是普通文本，换成text/html就是HTML文本了
    // 这里是类型对应格式网址 https://tool.oschina.net/commons
    // 图片不需要传编码格式utf-8这种，反而会出问题
response.setHeader("Content-Type","text/plain;charset=utf-8")

    console.log("我收到请求了哦！请求路径是:"+request.url)
        if(request.url=='/a'){
            //response.write("/a")
            // 还能直接在end里面发


            response.end("这里是aaaaaa");
        }
        else if (request.url=='/b') {
            var p = [
                {
                    name:"apple",
                    price:100
                },
                {
                    name:"banana",
                    price:200
                }
                // 响应内容只能是二进制数据或者字符串
            ]
            response.end(JSON.stringify(p));
        }
        else{
 // response对象有一个方法，叫write,可以给客户端发送响应数据，write可以多次使用，但是最后一定要用end来结束，不然客户端会一直等待
 response.write("请求数据到了")
 // 要end之后客户端才会显示信息
 response.end();
        }
   
})


// 绑定端口号，启动服务器,此处http://127.0.0.1:3000,ctrl+c关闭服务器
web.listen(3000,function(){
    console.log("服务器已经启动，可以访问端口号3000来访问！")
})

//服务器编码内容默认是utf8，但是浏览器不知道（它会使用当前系统默认的编码格式），所以不声明会乱码