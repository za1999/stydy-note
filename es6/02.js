//const声明一个只读的常量。一旦声明，常量的值就不能改变。
//但是如果const声明的是一个对象数组什么的，那么可以改！
//原来const只是不能改变地址！
const a =10;
// 下面这句会报错
// a=20

const b = {a:10}
// 可以！
b.a = 20
// console.log(b)

//const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

//const的作用域与let命令相同：只在声明所在的块级作用域内有效。而且没变量提升


//但如果不想const被改，可以使用对象冻结,应该使用Object.freeze方法。
const foo = Object.freeze({a:10});
// 改不了了，在严格模式甚至会报错
// foo.a = 20;
// console.log(foo)


//ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。


//顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。

//ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。


//JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。
// 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
// 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
// Node 里面，顶层对象是global，但其他环境都不支持。