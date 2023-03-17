title:  打造一款便携版的Sublime Text
date: 2014-10-03 22:42:47
tags:
- Sublime Text
categories: 
- 工具
---

最近这篇文章：《[Sublime Text 全程指引][1]》 by @Lucida 非常的火，各个技术网站都进行了转载，让我们彻底的见识到了Sublime Text的快捷、灵活的魅力。

由于之前学习过HTML，我也使用了款跨平台超便捷的编辑器。不得不佩服，其强大的扩展性使得编程，尤其是前端编程，非常的迅速快捷。

上面的文章已经非常细致讲解了其中的使用方法和快捷键的设置。这里我们就不再叙述，今天的主题是“打造一款便携版的Sumlime Text”。我们是程序猿，经常的要帮别人调试程序，但是别人的电脑上不一定有这样一款软件，所以需要我们随身携带着。软件安装的时候，其初始化数据和很多的包会主动的放在C盘的目录下，而不是软件的安装目录下，所以直接的打包拷贝安装目录下的文件是不能够完全的使用和发挥出Sublime Text 所有的功能的。

直接安装Sublime Text，不要打开
---------------------

大家可以参照上文提到的《Sublime Text 全程指引》中的步骤去进行安装。我这里使用的是Sublime Text 2，其实3也是一样的。
安装完Sublime Text 2，在第一次运行的时候（这里建议你先不要运行），Sublime Text 2会在%appdata%目录下生成一个Sublime Text 2的文件夹，用于存放配置文件，以及后面安装的各种插件。所以第一次打开该软件时会比较慢，那是在加载文件的原因。如下图：
![图片描述][2]
这里很重要的一步就是我们不让它在这里生成配置文件。如果已经运行了，请先在地址栏输入 %appdata%  然后删除该目录下的Sublime Text 2文件夹。
我们要做的是在软件的安装目录下，例如，我的电脑上的安装目录是：E:\ProgramFiles\Sublime Text 2；在该目录下新建 Data 文件夹(注意大小写)，如下图：
![图片描述][3]
做完这步之后，打开Sublime Text，所有的配置文件都会生成在Data文件夹中。

安装Package Control和插件
--------------------

继续按照《Sublime Text 全程指引》中的步骤去进行安装，安装Package Control完毕后，可以继续安装你需要的插件。如前端需要的插件有：jQuery、Bootstrap、Emment等。

打包
--

打包的文件并发送到U盘里，我们就可以在其他的电脑上使用了

学习资源
----

 1. [《Sublime Text 全程指引》][4]
 2. [前端开发工具技巧介绍—Sublime篇][5]
 3. [一些必不可少的Sublime Text 2插件][6]
 4. [SegmentFault中的资源][7]
 5. [Sublime Text的官网][8]
 6. [Package Control的官网][9]
 7. [诸葛小觉的博客][10]

参考资料：
-----

[打造便携版的Sublime Text 2][11]


  [1]: http://www.cnblogs.com/figure9/p/sublime-text-complete-guide.html
  [2]: http://blog-images.iotop.work/image/20151016-Appdata-Dir.png
  [3]: http://blog-images.iotop.work/image/20151016-Data-Dir.png
  [4]: http://zh.lucida.me/blog/sublime-text-complete-guide/
  [5]: http://www.imooc.com//view/40
  [6]: http://www.qianduan.net/essential-to-sublime-the-text-2-plugins.html
  [7]: http://segmentfault.com/search?q=Sublime%20Text
  [8]: http://www.sublimetext.com/
  [9]: https://sublime.wbond.net/
  [10]: http://www.zhugexiaojue.com/tag/sublimetext
  [11]: http://www.etosun.com/post/123