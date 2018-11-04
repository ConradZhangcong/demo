# anydoor

node.js static web server

## 目录

* config 配置文件
* cache.js 缓存
* compress.js 压缩
* mime.js 文件类型
* range.js 文件范围

## 安装

```
npm i -g anydoor
```

## 使用方法
```
anydoor # 把当前文件夹作为静态资源服务器根目录

anydoor -p 8080 # 设置端口号为 8080

anydoor -h localhost # 设置host为localhost

anydoor -d /usr # 设置根目录为 /usr
```
