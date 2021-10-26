title: 设置gitignore全局忽略DS_Store
date: 2018-04-10 09:57:55
tags:
- Git
- gitignore
categories:
- Git

---

# 问题&需求（What）：
MacOS 上经常会出现.DS_Store  文件，每个不同的路径下都会出现，导致自己在进行git add 命令的时候，需要额外地去除掉。如果使用git add . 的话则是占用过多的空间。
PS：[.DS_Store - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/.DS_Store)（需使用小梯子）

# gitignore的原理（Why）：
Git的项目实施的过程中，有一些文件是不需要进行跟踪版本管理的。这些文件对于Git来讲是透明的，因此Git提供了忽略的功能，即用户指定哪些文件可以不被管理。具体方法是在版本管理的根目录下（与.git文件夹同级）创建一个 .gitignore，填写相关内容即可。
.gitignore文件用于忽略文件,其规范如下：
1. 所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。
2. 可以使用标准的 glob 模式匹配。
3. 匹配模式最后跟反斜杠（/）说明要忽略的是目录。
4. 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

# 如何设置全局忽略（How）：
在上面的Why中，我们讲述的是gitignore的原理，因为本文章解决的是全局忽略，因此不是指定单独的项目，而是在用户的根目录下进行设置。

## 更改 ~/.gitignore_global 

在gitignore_global中写入： 
```
.DS_Store 
*/.DS_Store 
```
![root_gitignore_global](http://om6jcmh5k.bkt.clouddn.com/root_gitignore_global.png)

## 更改 ~/.gitconfig 

配置.gitconfig 文件如下： 
```
[user] 
name = MiracleWong
email = xxxxxx@126.com
[color]
ui = auto
[core] 
excludesfile = /Users/miraclewong/.gitignore_global 
```

![root_gitconfig](http://om6jcmh5k.bkt.clouddn.com/root_gitconfig.png)



PS：说明miraclewong是用户名，因个人而有所不同。通过pwd查看。


# 参考资料
1. [.DS_Store - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/.DS_Store)
2. [Create a ignoring files](https://help.github.com/articles/ignoring-files/)

