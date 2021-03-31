// ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

// const foo = 'bar';
// const baz = {foo};
// baz // {foo: "bar"}

// 等同于
// const baz = {foo: foo};

//上面代码中，变量foo直接写在大括号里面。这时，属性名就是变量名, 属性值就是变量值。下面是另一个例子。

function f(x, y) {
    return {x, y};
  }
  
  // 等同于
  
  function f(x, y) {
    return {x: x, y: y};
  }
  
  f(1, 2) // Object {x: 1, y: 2}

var obj = {}
  // 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;
  // console.log(obj)



  // let obj = {
  //   [propKey]: true,
  //   ['a' + 'bc']: 123
  // };



  //函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。

const person = {
  sayName() {
    console.log('hello!');
  },
};

//person.sayName.name   // "sayName"



let obj2 = { a: { b: 1 } };
let { ...x } = obj2;
obj2.a.b = 2;
x.a.b // 2


//链判断运算符有三种用法。判断属性方法是是否存在，如果存在读取

// obj?.prop // 对象属性
// obj?.[expr] // 同上
// func?.(...args) // 函数或对象方法的调用
let a = {
  b:100
}
//console.log(a?.a) //undefined
//console.log(a?.b) //100
 //console.log(a?.c) //undefined