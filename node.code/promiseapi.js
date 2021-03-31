var fs = require('fs')

//console.log(fs)
// 在es6中新增的api叫promise解决异步问题
//promise是一个构造函数


// 创建promise容器
 var p1 =  new Promise(
     function(resolve,reject){
         fs.readFile('./a.js','utf8',function(err,data){
                    if(err){
                        //如果失败
                        //console.log(err)
                        // 把容器的pending状态变成rejected
                        reject(err)
                    }else{
                        //console.log(data)
                        // 状态改为成功
                        resolve(data)
                    }
         })
     }
 )


 var p2 =  new Promise(
    function(resolve,reject){
        fs.readFile('./b.js','utf8',function(err,data){
                   if(err){
                       //如果失败
                       //console.log(err)
                       // 把容器的pending状态变成rejected
                       reject(err)
                   }else{
                       //console.log(data)
                       // 状态改为成功
                       resolve(data)
                   }
        })
    }
)
//  p1就是promise
// 当p1成功了，然后（then）做指定的动作
// then方法接受的函数就是函数中的resolve函数
// 当前函数中的return的结果可以在后面的then中的function中接受到
p1.then(function(data){
    console.log(data)
    // 当return一个promise对象的时候，后续的then的第一个参数会作为p2的resolve
     return p2
},function(err){
    console.log('读取文件失败了')
})
.then(function(data){
    console.log(data)
})