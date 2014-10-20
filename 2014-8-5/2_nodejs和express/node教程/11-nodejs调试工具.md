nodejs调试工具
- supervior 修改文件，无需重启
```shell
   #调试express项目
   supervisor  ./bin/www
```
- node-inspector 调试JS
```bash
  ###node设置debug端口###
  [root@hjzheng markdown-reader]#  node --debug-brk  app.js
  debugger listening on port 5858

  ###node-inspector打开chrome连接端口###
  [root@hjzheng markdown-reader]# node-inspector --web-port=8899 app.js 
  Node Inspector v0.7.4
  Visit http://127.0.0.1:8899/debug?port=5858 to start debugging.

  ###用chrome打开url: http://127.0.0.1:8899/debug?port=5858###
```
- forever 让nodejs应用后台执行
