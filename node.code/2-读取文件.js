//node可以进行文件的读取，浏览器则不行
//读取文件需要fs，file system的简称
//我们用require引入fs
var fs = require("fs")
//console.log(fs)
//读取文件
// 第一个参数是地址，第二个参数是一个回调函数
//回调函数有两个参数，data和error，如果读取失败，error就是错误错误对象（data为null），成功就是error是null，data是读取的数据
fs.readFile("data/hi.txt",function(error,data){
console.log(data)
// 文件被存储为二进制，但是显示的时候被转换为16进制，显示的不是原本的样子，可以通过tostring转一下
console.log(data.toString())
})