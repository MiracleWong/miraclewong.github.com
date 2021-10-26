title: adb命令行的完全解析
date: 2016-01-07 20:57:55
tags:
- Android
- Adb
categories: 
- Android
---


实习的时候，每一次调试或者应用崩溃的时候，我都要去Android的Logcat 中去查找原因的时候，Android组中的Steve都会朝我喊，“看Log、看Log”

后来在一些StackOverFlow的大牛的评论中看到了[ADB Shell](www.adbshell.com)这个网站，这里仅仅是按照网站上的内容进行翻译。
## What Is Adb
adb的全称是Android Debug Bridge，是一个命令行工具。通过这个工具可以直接操作管理android模拟器或者真实的android设备。
## ADB Debugging

- adb devices：
查看所连接的设备以及设备所对应的序列号
- adb forward <local> <remote>：PC上所有local端口的数据将被重新定向到手机remote端口
- adb start-server：
开启adb服务，如果之前它没有启动的话
- adb kill-server：
关闭adb服务

## Wireless
- adb connect <ip:port>：
连接到指定的ip，通常配合wifi debug
- adb usb：
在USB模式下重新开启abd命令
## Package Manager
- adb install：
安装App
- adb uninstall：
卸载App
- adb shell pm list packages：
查看所有已经安装的的应用的包名
- adb shell pm path：
- adb shell pm clear：
清除应用的数据

## File Manager
- adb pull <remote> <local>：
从手机复制文件出来
- adb push <local> <remote>：
向手机发送文件
- adb shell ls：打印出当前目录的清单，同Linux下的ls
- adb shell cd：更改目录
- adb shell rm：删除文件
- adb shell mkdir：穿件指定名称的目录
- adb shell touch：新建一个不存在的文件
- adb shell pwd：显示当前所处的目录
- adb shell cp：拷贝
- adb shell mv：移动文件
## Network

- adb shell netstat：查看网络状态
- adb shell ping：检查两个网络之间的连接情况和延时
- adb shell netcfg：查看ip信息
- adb shell ip：查看ip信息
## Logcat
- adb logcat：
在屏幕上打印出Log日志信息
- adb shell dumpsys：查询所有service的信息
- adb shell dumpstate：查询各种信息，比如进程信息，内存信息，进程是否正常等

示例代码：
adb shell dumpsys activity top：查看栈顶Activity，可以用来获取包名
adb shell dumpsys activity：Activity Manager的状态
adb shell dumpsys package：包信息
adb shell dumpsys meminfo：内存使用情况
adb shell dumpsys procstats：图形的信息（Graphics State）
## ScreenCap
- adb shell screencap：截图
- adb shell screenrecord（Android4.4以上）：记录设备的显示操作为视频（mp4格式）

## System
- adb root：获取管理员权限
- adb sideload：刷机模式
- adb shell ps：查看当前设备中的进程信息
- adb shell top：显示CPU的进程
- adb shell getprop：查看机器的全部信息参数
- adb shell setprop：设置机器的信息参数

## Other（这部分是作者自己加上去的）
- adb version：查看adb版本
- adb help：进入adb的帮助页面
- adb get-product：获取设备的ID
- adb get-seriainof：获取设备的序列号


参考资料
【1】[ADB Shell](http://adbshell.com/)

