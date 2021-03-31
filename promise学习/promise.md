### Promise是es6的解决异步的方案

旧方案是单纯的使用回调函数

从语法上来说:Promise是一个构造函数



从功能上来说: promise对象用来封装一个异步操作并可以获取其成功/失败的结果值



支持链式调用，可以解决回调地狱的问题



创建promise

var xx = new promise（函数） 因为它也是一个构造函数嘛，参数是一个函数

函数应该有两个参数，我们一般用resolve（解决）和reject（拒绝），这两个都是函数类型的数据，异步任务成功了调用resolve，失败调用reject

const test = new Promise((resolve,reject)=>{

里面放异步任务

})

异步任务代码成功你就调resolve()，如果调用了resolve方法，promise的状态将设置为成功

失败就reject()，如果调用了reject方法，promise的状态将设置为失败



这两个函数的具体代码写下面，这么写

创建的promise的名字.then，我们这里是test

所以

then里面同样放两个函数作为参数

回调函数：由你创建但是不由你调用

//有参数也可以写参数里面

test.then(()=>{

成功的回调函数代码

},()=>{

失败的回调函数代码

})

then方法最后会返回一个新的promise对象

promise有三种状态：pending/reslove/reject 。pending就是等待，resolve可以理解为成功，reject可以理解为拒绝。

状态其实是Promise实例对象的一个属性叫PromiseState

状态只能该变一次，成功就是成功，失败就是失败

Promise实例还有一个很重要的方法叫PromiseResult,里面存的是对象成功或者失败的结果，例如下面的data或err就是PromiseResult

let test = new Promise((resolve,reject)=>{

  fs.readFile('./resource/test.txt',(err,data)=>{

​    *// 如果错误调用reject方法顺便把err内容传了进去*

​      if(err) reject(err);

​      *// 成功使用resolve,把结果也传进去*

​      resolve(data)

​    })

})



test.then((data)=>{

  console.log("读取文件成功,数据是:"+data)



},(err)=>{

  console.log("读取文件失败,错误是"+err)

})

PromiseResult,就是传给resolve或reject的参数

resolve和reject是可以对PromiseResult进行修改的



promise对象.catch方法和.then方法类似，不过它只能指定失败的回调函数

test.catch(失败的回调函数)



Promise构造函数上的方法resolve, Promise.resolve((value)=>{

})

value成功的数据或者Promise对象

返回一个成功、失败的promise对象

使用方法let p1 = Promise.resolve(521);  p1将是一个promise对象，状态为成功，PromiseResult值为521

如果传入的参数非Promise类型的对象，则返回结果为成功的promise对象

如果传入的参数是Promise对象，则参数的结果决定了resolve的结果，就是传入的那个promise成功那么返回的promise就是成功，失败就是失败，值为参数返回的值



Promise构造函数上的方法reject, Promise.reject((reason)=>{

})

reason：失败的原因

返回一个失败的promise对象，你传什么进去最后都返回失败的promise对象，

如果你传的参数是promise对象，返回的promise的PromiseResult值为你传入的promise对象





Promise构造函数上的方法all，Promise.all((包含n个promise的数组)=>{

})



返回一个新的promise，只有所有promise都成功了才成功，一个失败就是失败



Promise构造函数上的方法race，Promise.race((包含n个promise的数组)=>{

})

返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态



改变promise状态的方法，resolve，reject，throw（失败的状态）





*//  hen方法返回的值是一个promise对象*

*// 如果在回调函数里有抛出异常那个返回的promise对象状态为reject，我这里*

*// 状态fulfilled就是成功*

*// 上面内容两个回调均成立*

*// 因为返回的是promise对象，我们可以继续then下去！*

 *// 你then这么长一串，中间要是出现了reject方法，我们可以在最后来个.catch来收集reject的值！不管这个reject在第几个

*// 就算没有返回值也会以成功的状态一直返回下去，状态为成功，只要你一直.then*

只有返回一个pending状态的promise才可以结束then链条



### async和await

#### async函数

1.函数的返回值为一个promise对象

​        async function test(){

​      *// 如果这里返回值为非promise对象，返回的promise对象值就为这个*

//如果返回的是一个promise对象，那么这个返回的对象状态影响async返回的promise对象的状态，值为返回的promise对象回调函数的参数

//如果没有返回而是抛出异常那么async函数返回的promise为reject，值为你抛出的值

​      return 999

​    }

​    let res = test()

​     *// f返回值为一个promise对象*，在这里值为999

​    console.log(res)

2.promise对象的结果由async函数执行的返回值决定

#### await 表达式

1.await右侧的表达式一般是promise对象，也可以是其它值

2.如果右侧表达式为promise值，await返回的是promise成功的值

3.如果是其它表达式，直接将此值作为await的返回值

4.await必须写在async函数中，但是async函数里可以没有await

5.如果await的promise失败了，就会抛出异常，需要用try...catch来处理

 <script>
        async function test(){
            let p = new Promise((resolve,reject)=>{
                resolve("成功！")
            })
            let p2 = new Promise((resolve,reject)=>{
                reject("失败！")
            })
            // 这里是接受promise对象的情况，且为成功
            let res1 = await p;
            console.log(res1)
            // 这里是接受promise对象的情况，且为失败，我们需要用try...catch来处理才行啊
            try {
                let res2 = await p2;
            } catch (error) {
                // error值为reject的值
                console.log(error)

            }
            

            // 接受值为非promise对象
            let res3 = await 999;
            console.log(res3)
        }
        test()
    </script>

try里面包的代码没错会正常执行，如果报错就会进catch里面





### async和await结合使用

