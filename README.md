## 说明

##### 1、Dockerfile修改

##### 2、根目录requirements.txt python依赖文件

##### 3、docker-entrypoint.sh文件修改

##### 4、在docker目录下新增start.sh，将nginx、pm2单独分出来

##### 5、移除了git库，需要使用git库可以自行修改Dockerfile文件进行添加git及环境变量

##### 6、需更新qinglong版本，自行覆盖ql([qinglong](https://github.com/whyour/qinglong))、ql_s([qinglong-static](https://github.com/whyour/qinglong-static))这两个目录，并替换docker下的脚本文件

## 链接

- [qinglong](https://github.com/whyour/qinglong)