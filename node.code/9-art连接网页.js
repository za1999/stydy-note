// 导入模板引擎
var template = require('art-template')
// path模块用来拼接字符串，这里用来拼接路径我们
var path  =  require('path');

var view = path.join(__dirname,'views','index.art')
console.log(view)
// 引入后返回的template方法是用来拼接字符串的，他有几个参数
// __dirname指的是当前目录，找路径非常方便！
//参数1.模板路径，绝对路径  2.一个对象，里面是要展示的数据
var html = template(view,{
    name:'张三',
    age:14,
    con:'<h1>哈哈哈哈哈哈</h1>',
    arr:['天','下','三','分']
})
console.log(html)