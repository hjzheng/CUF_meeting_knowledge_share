1.第一个nodejs程序Hello World
 
打一个文本编辑器，在其中输入
```shell
console.log('Hello World');
```
保存为HelloWorld.js。打开终端进入该文件的目录运行
```shell
node HelloWorld.js
```
执行则可以看到输出的HelloWorld

2.Node.js命令行工具
```shell
node -v  //查看版本
node -e "console.log('Hello World')";  //执行一段命令        
```
```shell
node //使用node命令进入编译模式
console.log("Hello World"); //第一行是输出、第二行是返回值
```

3.建立HTTP服务器
    
创建一个app.js
```javascript
var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>HaHa</p>');
}).listen(3000);
console.log('HTTP server is listening at port 3000.');
```
运行node app.js  
打开浏览器访问http://localhost:3000即可。
这样就部署了一个web服务器。比如tomcat、resin更加方便。

4.调试代码：
```javascript
npm install -g supervisor 
```
安装supervisor 来调试代码, 不需要每次重启node.js的服务。
使用supervisor app.js启动
 