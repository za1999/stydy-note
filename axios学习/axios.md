## axios是Ajax请求库

axios是一个基于promise的http客户端

浏览器端使用axios可以向服务器发送ajax请求

node.js使用可以向远端服务发送http请求

```
AJAX通xmlHttpRequest象请求服务器服务器接受请求返数据实现刷新交互
普通http请求通httpRequest象请求服务器接受请求返数据需要页面刷新
```



本次学习使用json server来创建服务器

步骤如下

1.安装:npm i -g json-server

2.创建文件Create a db.json file with some data,创建一个文件叫db.json往里面添加点数据

3.开启服务器:start JSON Server

启动代码为:  json-server --watch db.json





#### 安装axios:  npm i axios

学习阶段我们使用cdn方式

<script src="网络地址"></script>





HTML DOM querySelector()和querySelectorAll() 方法获取元素比较方便

<body>

    <div>

​    <button>点击我发送get请求</button>

​    <button>点击我发送post请求</button>

​    <button>点击我发送put请求</button>

​    <button>点击我发送delete请求</button>

  </div>

  *<!-- cdn方式引入axios -->*

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> 

    <script>

​    const btns = document.querySelectorAll('button')

​    console.log(btns)

  </script>

</body>



axios普通使用

 axios({

​        *// 请求类型*

​        method:'post',

​        *// url，这里指向json里面posts下面id为2的文章*

​        url:' http://localhost:3000/posts',

​        *// 请求参数*

​        data:{

​          title:"home二",

​          author:"第二个张傲"

​        }



​      }).then((value)=>{

​        console.log(value)

​      },(reason)=>{



​      })





get请求

 axios({

​        *// 请求类型*

​        method:'post',

​        *// url，这里指向json里面posts下面id为2的文章*

​        url:' http://localhost:3000/posts',

​        *// 请求参数*

​        data:{

​          title:"home二",

​          author:"第二个张傲"

​        }



​      }).then((value)=>{

​        console.log(value)

​      },(reason)=>{



​      })



axios还能直接用方法完成请求

比如axios.get()         axios.post()等，方法不少，作用想必也简单明了





axios的默认配置，比如我们这里吧默认请求设置为get

axios.defaults.method = 'GET'；

下面设置基础url,比如

axios.defaults.baseURL = 'http://localhost:3000'



axios还能通过创建对象来进行Ajax请求

比如const test = axios.create({

baseURL:'',

xxxxxx

})

test({url:'xxxxxxxx'}).then()然后怎么怎么





### axios拦截器

#### 请求拦截器

在发送请求之前可以借用函数来对请求参数和内容来做一些处理和检测，如果有问题我们可以取消这个请求

#### 响应拦截器

可以在我们处理结果之前对结果进行一些预处理

