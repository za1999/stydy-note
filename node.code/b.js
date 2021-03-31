console.log("我是b")

// 如果两个文件需要通信，需要使用export
var g = "xx"
exports.gg = g;

// 这样导出是一个对象，如果你想导出那边就是什么。比如导出一个数组，那边就直接收到一个数组那么就用module.exports = 你要导出的东西
console.log(exports)