// 模板字符串
// 传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。

// $('#result').append(
//   'There are <b>' + basket.count + '</b> ' +
//   'items in your basket, ' +
//   '<em>' + basket.onSale +
//   '</em> are on sale!'
// );
// 上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

// $('#result').append(`
//   There are <b>${basket.count}</b> items
//    in your basket, <em>${basket.onSale}</em>
//   are on sale!
// `);



// 模板字符串之中还能调用函数。
function fn() {
  return "Hello World";
}
// `foo ${fn()} bar`
// foo Hello World bar



//由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

//`Hello ${'World'}`
// "Hello World"



// 模板字符串甚至还能嵌套。

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
//面代码中，模板字符串的变量之中，又嵌入了另一个模板字符串，使用方法如下。
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));




//如果需要引用模板字符串本身，在需要时执行，可以写成函数。
let func = (name) => `Hello ${name}!`;
func('Jack') // "Hello Jack!"



//模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。

alert`hello`
// 等同于
alert(['hello'])