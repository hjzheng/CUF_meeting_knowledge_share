1.Node.js是什么？

Node.js不是一种独立的语言，与PHP、java、.net即是开发语言也是平台不同，也不是javaScript的框架 jquery。 Node.js是一个让JavaScript运行在服务端的开发平台。

2.Node.js能做什么？

JavaScript是由客户端而产生，Node.js为网络而生。

- 具有复杂逻辑的网站
- 基于社交网络的大Web的应用
- Web Socket服务器
- TCP/UDP套接字应用程序
- 命令行工具
- 交互式终端程序
- ...


3.异步式I/O与事件驱动

Node.js最大的特性就是采用异步式I/O与事件驱动的架构设计。对于高并发的解决方案，传统的架构是多线程模型，也就是为每个业务逻辑提供一个系统线程，通过系统线程切换来弥补同步式I/O调用时的时间开销。Node.js使用的单线程模型，在执行的过程中会维护一个事件队列，程序在执行时在进入时间循环等待下一个事件到来。

普通：
```javascript
res = db.query("select * from user");
res.output();
```
   
Node.js： 
```javascript
res = db.query("select * from user",function(res){
    res.output();
});
```

程序会自动往下执行。

4.nodejs的产生因素：

- V8
- javaScript在服务器端空白
- 事件驱动
- CommonJs的规范化

5.部署node.js的环境
Node.js官方：http:/nodejs.org

下载安装包(这里以Linux为例)
解压，并将bin目录加入环境变量path中，如果是bash，在.bash_profile中加入下面的code
```bash 
PATH=$PATH:/opt/nodejs/node-v0.10.30-linux-x64/bin
export PATH
```
重现登陆你的shell，测试node和npm
```bash
node -v
npm -v
```
