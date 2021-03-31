var url = require('url')

var obj = url.parse('https://www.baidu.com/s?ie=utf8&oe=utf8&tn=98010089_dg&ch=11&wd=%E6%88%91%E6%98%AF%E4%BD%A0%E5%93%A5%E5%93%A5')

var obj2 = url.parse('https://www.baidu.com/s?ie=utf8&oe=utf8&tn=98010089_dg&ch=11&wd=%E6%88%91%E6%98%AF%E4%BD%A0%E5%93%A5%E5%93%A5',true)

// 单独获取不包含查询字符串的路径部分,就是没参数那部分
var obj3 = obj2.pathname;



console.log(obj)
console.log("*********************************************")
console.log(obj2)
console.log("*********************************************")
console.log(obj3)