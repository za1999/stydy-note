//ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。


//例子let [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []


//如果解构不成功，变量的值就等于undefined。


let [x, y] = [1, 2, 3];
// x // 1
// y // 2

let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4



// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};


//对于 Set 结构，也可以使用数组的解构赋值。
let [x, y, z] = new Set(['a', 'b', 'c']);
// x // "a"



// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth // 5
// 上面代码中，fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。



// 解构赋值允许指定默认值。
let [foo = true] = [];
// foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'


// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined


//解构不仅可以用于数组，还可以用于对象。


//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// foo // "aaa"
// bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
// baz // undefined



//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello




//如果变量名与属性名不一致，必须写成下面这样。

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
// f // 'hello'
// l // 'world'
//上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。


//与数组一样，解构也可以用于嵌套结构的对象。

let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"
//注意，这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。

let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p, p: [x, { y }] } = obj;
//   x // "Hello"
//   y // "World"
//   p // ["Hello", {y: "World"}]


//注意，对象的解构赋值可以取到继承的属性。

const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
// foo // "bar"



//对象的解构也可以指定默认值。

var {x = 3} = {};
// x // 3

var {x, y = 5} = {x: 1};
// x // 1
// y // 5

var {x: y = 3} = {};
// y // 3

var {x: y = 3} = {x: 5};
// y // 5

var { message: msg = 'Something went wrong' } = {};
// msg // "Something went wrong"



//默认值生效的条件是，对象的属性值严格等于undefined。

var {x = 3} = {x: undefined};
// x // 3

var {x = 3} = {x: null};
// x // null


//如果要将一个已经声明的变量用于解构赋值，必须非常小心。

// 错误的写法
let x;
// {x} = {x: 1};
// SyntaxError: syntax error
//上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

// 正确的写法
let x;
({x} = {x: 1});

//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
// first // 1
// last // 3



//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

let {length : len} = 'hello';
// len // 5



//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
//上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。