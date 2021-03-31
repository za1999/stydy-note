// 我们来初体验promise
const fs  = require("fs");

// 这里是回调函数的形式
// fs.readFile('./resource/test.txt',(err,data)=>{
//     // 如果失败抛出错误
//     if(err) throw err;
//     console.log(data.toString())
// })


// 下面是promise的方式
let test = new Promise((resolve,reject)=>{
    fs.readFile('./resource/test.txt',(err,data)=>{
        // 如果错误调用reject方法顺便把err内容传了进去
            if(err) reject(err);
            // 成功使用resolve,把结果也传进去
            resolve(data)
            
        })
})

test.then((data)=>{
    console.log("读取文件成功,数据是:"+data)

},(err)=>{
    console.log("读取文件失败,错误是"+err)
})