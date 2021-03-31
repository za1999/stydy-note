var fs = require("fs")

// 第一个参数的文件路径（有会覆盖，没有会创建）
// 第二个参数是内容
// 第三个是回调函数，参数是error，成功是null，失败是错误对象
fs.writeFile("data/hi2.txt","大家好我是写入的文件",function (error) {
    console.log("文件写入成功！")
})