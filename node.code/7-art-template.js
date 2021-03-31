// node中使用atr-template先引入进来
// 你install的名字是什么，那么require的名字就是什么
var template = require('art-template')



// node中的使用方法
var ret = template.render('hello {{name}}',{
    name:'lady'
})

console.log(ret)


// 如果我们读取网页的时候用read file，获取的是二进制，但是render方法需要字符串，用的时候转一下就好了


// 这里相当于服务端渲染，网页请求数据叫客户端渲染
//客户端渲染比如Ajax请求无法被爬虫，别人搜索引擎可能搜不到你